'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Audio-wave particle field that sits behind Hero content.
 *   - Vertex shader animates a soft wave + mouse-influenced displacement.
 *   - GSAP ScrollTrigger fades the canvas out as the hero leaves view.
 *   - Renders only when the hero is intersecting the viewport (saves battery).
 *   - Caps DPR at 1.5 and stops rAF when offscreen → 60fps on mid-range laptops.
 *
 * Color: warm cream (#e5d9b8) — a restrained "studio gold" that fits the
 * editorial dark palette without breaking the off-white discipline.
 */
const PARTICLE_COUNT = 4200;
const GRID_X = 84;
const GRID_Y = Math.ceil(PARTICLE_COUNT / GRID_X);

const VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uPixelRatio;
  uniform float uIntensity;

  attribute float aSeed;

  varying float vAlpha;

  void main() {
    vec3 pos = position;

    // primary wave — slow sine sweep across X & Y
    float w1 = sin(pos.x * 0.32 + uTime * 0.6) * 0.45;
    float w2 = sin(pos.y * 0.22 + uTime * 0.45) * 0.32;
    float w3 = sin((pos.x + pos.y) * 0.18 - uTime * 0.35) * 0.22;
    pos.z = (w1 + w2 + w3) * uIntensity;

    // per-particle jitter so the field doesn't read as a rigid grid
    pos.z += sin(uTime * 0.8 + aSeed * 6.28) * 0.08 * uIntensity;

    // mouse "ripple"
    vec2 m = uMouse * 8.0;
    float d = distance(pos.xy, m);
    float pull = exp(-d * 0.35) * 1.4 * uIntensity;
    pos.z += pull;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;

    // size scales with depth + DPR; brighter when displaced
    float depth = -mv.z;
    gl_PointSize = (1.6 + abs(pos.z) * 1.2) * uPixelRatio * (12.0 / max(depth, 0.1));

    vAlpha = 0.32 + abs(pos.z) * 0.18 + pull * 0.25;
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  precision mediump float;
  uniform vec3 uColor;
  varying float vAlpha;

  void main() {
    // round, soft point
    vec2 c = gl_PointCoord - vec2(0.5);
    float d = length(c);
    if (d > 0.5) discard;
    float soft = smoothstep(0.5, 0.15, d);
    gl_FragColor = vec4(uColor, vAlpha * soft);
  }
`;

export default function HeroParticles() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    const w = mount.clientWidth;
    const h = mount.clientHeight;
    renderer.setSize(w, h);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100);
    camera.position.set(0, 0, 14);
    camera.lookAt(0, 0, 0);

    // grid of particles
    const positions = new Float32Array(GRID_X * GRID_Y * 3);
    const seeds = new Float32Array(GRID_X * GRID_Y);
    let i = 0;
    for (let y = 0; y < GRID_Y; y++) {
      for (let x = 0; x < GRID_X; x++) {
        const px = (x / (GRID_X - 1) - 0.5) * 26;
        const py = (y / (GRID_Y - 1) - 0.5) * 14;
        positions[i * 3 + 0] = px;
        positions[i * 3 + 1] = py;
        positions[i * 3 + 2] = 0;
        seeds[i] = Math.random();
        i++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 1.5) },
      uIntensity: { value: 1.0 },
      uColor: { value: new THREE.Color('#e5d9b8') },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // mouse follow — smoothed toward target
    const mouseTarget = new THREE.Vector2(0, 0);
    const mouseCurrent = new THREE.Vector2(0, 0);
    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseTarget.set(nx, ny * 0.5);
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    // resize
    const onResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      renderer.setSize(nw, nh);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    // visibility-gate the render loop — pause when offscreen
    let visible = true;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (visible = e.isIntersecting)),
      { threshold: 0 },
    );
    io.observe(mount);

    // GSAP ScrollTrigger — fade canvas + reduce intensity as hero leaves
    const fadeTl = gsap.timeline({
      scrollTrigger: {
        trigger: mount,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
    fadeTl.to(uniforms.uIntensity, { value: 0.25, ease: 'none' }, 0);
    fadeTl.to(renderer.domElement, { opacity: 0, ease: 'none' }, 0);

    // animate
    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      const dt = Math.min(clock.getDelta(), 0.05);
      if (visible) {
        mouseCurrent.lerp(mouseTarget, 0.06);
        uniforms.uMouse.value.copy(mouseCurrent);
        uniforms.uTime.value += dt;
        // gentle camera drift for parallax
        camera.position.x = mouseCurrent.x * 0.4;
        camera.position.y = mouseCurrent.y * 0.25;
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      io.disconnect();
      fadeTl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === mount) st.kill();
      });
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" aria-hidden />;
}
