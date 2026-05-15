'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Audio-wave particle field behind Hero.
 *   - ~12.6K particles (3× the previous version).
 *   - Mouse REPULSION: particles flee from the cursor in the XY plane,
 *     not toward it. Z still bumps slightly so the field "rises" near hand.
 *   - Glow: shader renders a soft inner core + wider halo per point with
 *     additive blending, giving each particle a true light feel.
 *   - GSAP ScrollTrigger fades + dims as hero leaves view.
 *   - rAF paused when offscreen (IntersectionObserver).
 *
 * Color: studio cream (#e5d9b8) — keeps the editorial discipline; not pure
 * gold. Change uColor below if a brighter accent is wanted.
 */
const PARTICLE_COUNT = 12600;
const GRID_X = 140;
const GRID_Y = Math.ceil(PARTICLE_COUNT / GRID_X);

const VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uPixelRatio;
  uniform float uIntensity;
  uniform float uRepelStrength;

  attribute float aSeed;

  varying float vAlpha;
  varying float vGlow;

  void main() {
    vec3 pos = position;

    // primary wave — slow sine sweep across X & Y
    float w1 = sin(pos.x * 0.32 + uTime * 0.6) * 0.45;
    float w2 = sin(pos.y * 0.22 + uTime * 0.45) * 0.32;
    float w3 = sin((pos.x + pos.y) * 0.18 - uTime * 0.35) * 0.22;
    pos.z = (w1 + w2 + w3) * uIntensity;

    // per-particle jitter so the field doesn't read as a rigid grid
    pos.z += sin(uTime * 0.8 + aSeed * 6.28) * 0.08 * uIntensity;

    // MOUSE REPULSION — flee in XY plane, rise slightly in Z
    vec2 m = uMouse * 9.0;
    vec2 toParticle = pos.xy - m;
    float dist = length(toParticle);
    float falloff = exp(-dist * 0.35);
    vec2 dir = dist > 0.0001 ? toParticle / dist : vec2(0.0);
    pos.xy += dir * falloff * uRepelStrength * 2.2 * uIntensity;
    pos.z += falloff * 1.6 * uIntensity;

    // bright spike near cursor for glow
    vGlow = falloff * 1.4 * uIntensity;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;

    float depth = -mv.z;
    gl_PointSize = (2.0 + abs(pos.z) * 1.4 + vGlow * 3.0) * uPixelRatio * (12.0 / max(depth, 0.1));

    vAlpha = 0.30 + abs(pos.z) * 0.18 + vGlow * 0.6;
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  precision mediump float;
  uniform vec3 uColor;
  uniform vec3 uGlowColor;
  varying float vAlpha;
  varying float vGlow;

  void main() {
    vec2 c = gl_PointCoord - vec2(0.5);
    float d = length(c);
    if (d > 0.5) discard;

    // dual-layer: bright core + soft halo for glow
    float core = smoothstep(0.32, 0.0, d);
    float halo = smoothstep(0.5, 0.18, d);
    float lum = core * 1.7 + halo * 0.45;

    // glow particles shift slightly warmer & brighter
    vec3 col = mix(uColor, uGlowColor, vGlow);

    gl_FragColor = vec4(col, vAlpha * lum);
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

    // grid of particles — denser
    const positions = new Float32Array(GRID_X * GRID_Y * 3);
    const seeds = new Float32Array(GRID_X * GRID_Y);
    let i = 0;
    for (let y = 0; y < GRID_Y; y++) {
      for (let x = 0; x < GRID_X; x++) {
        const px = (x / (GRID_X - 1) - 0.5) * 30;
        const py = (y / (GRID_Y - 1) - 0.5) * 16;
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
      uRepelStrength: { value: 1.0 },
      uColor: { value: new THREE.Color('#e5d9b8') },
      uGlowColor: { value: new THREE.Color('#fff4d4') }, // brighter cream for glow peaks
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

    // mouse follow — smoothed
    const mouseTarget = new THREE.Vector2(-10, -10); // start off-canvas so no initial repel
    const mouseCurrent = new THREE.Vector2(-10, -10);
    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseTarget.set(nx, ny * 0.5);
    };
    const onPointerLeave = () => mouseTarget.set(-10, -10);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);

    const onResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      renderer.setSize(nw, nh);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    let visible = true;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (visible = e.isIntersecting)),
      { threshold: 0 },
    );
    io.observe(mount);

    const fadeTl = gsap.timeline({
      scrollTrigger: {
        trigger: mount,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
    fadeTl.to(uniforms.uIntensity, { value: 0.2, ease: 'none' }, 0);
    fadeTl.to(renderer.domElement, { opacity: 0, ease: 'none' }, 0);

    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      const dt = Math.min(clock.getDelta(), 0.05);
      if (visible) {
        mouseCurrent.lerp(mouseTarget, 0.09);
        uniforms.uMouse.value.copy(mouseCurrent);
        uniforms.uTime.value += dt;
        camera.position.x = mouseCurrent.x * 0.35;
        camera.position.y = mouseCurrent.y * 0.22;
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
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
