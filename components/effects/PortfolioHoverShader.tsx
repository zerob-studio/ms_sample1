'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Props = {
  src: string;
  active: boolean;
  mouse: { x: number; y: number }; // 0..1 within card
};

/**
 * Lazy per-card WebGL hover effect. Renders a planar mesh of the cover image
 * with a ripple + chromatic-aberration shader centered on the cursor.
 *
 * Cost control:
 *   - Renderer is created on first activation, then cached.
 *   - rAF loop runs only while `active` is true.
 *   - Texture loaded once, mipmapped, anisotropic capped.
 *   - Canvas opacity fades; the underlying <img> stays in DOM for SSR/no-JS.
 */
const VS = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FS = /* glsl */ `
  precision mediump float;
  uniform sampler2D uTex;
  uniform vec2 uMouse;
  uniform float uTime;
  uniform float uIntensity;
  varying vec2 vUv;

  // cheap hash noise
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  void main() {
    vec2 uv = vUv;
    vec2 toMouse = uv - uMouse;
    float r = length(toMouse);

    // expanding ripple from cursor
    float wave = sin(r * 28.0 - uTime * 6.5) * exp(-r * 5.5);
    vec2 dir = r > 0.0001 ? toMouse / r : vec2(0.0);
    uv += dir * wave * 0.025 * uIntensity;

    // subtle chromatic split
    float chroma = 0.004 * uIntensity;
    float rc = texture2D(uTex, uv + vec2(chroma, 0.0)).r;
    float gc = texture2D(uTex, uv).g;
    float bc = texture2D(uTex, uv - vec2(chroma, 0.0)).b;
    vec3 col = vec3(rc, gc, bc);

    // warm studio grade to match palette
    col = mix(col, col * vec3(1.06, 1.03, 0.95), 0.35);

    // SCANLINES — horizontal lines pulsing slowly down
    float lineDensity = 320.0;
    float scan = sin((uv.y + uTime * 0.04) * lineDensity);
    col -= 0.045 * smoothstep(0.0, 1.0, scan);

    // NOISE — film-grain over the image
    float n = hash(uv * 1024.0 + vec2(uTime * 12.0, 0.0));
    col += (n - 0.5) * 0.07 * uIntensity;

    // moving horizontal "tear" band — rare but visible
    float band = step(0.98, sin(uTime * 0.7 + uv.y * 14.0)) * 0.15;
    col += vec3(band) * uIntensity;

    gl_FragColor = vec4(col, 1.0);
  }
`;

export default function PortfolioHoverShader({ src, active, mouse }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stateRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;
    mesh: THREE.Mesh;
    uniforms: {
      uTex: { value: THREE.Texture | null };
      uMouse: { value: THREE.Vector2 };
      uTime: { value: number };
      uIntensity: { value: number };
    };
    mouseSmoothed: THREE.Vector2;
  } | null>(null);

  // initialize once on first activation
  useEffect(() => {
    if (!active || !canvasRef.current || stateRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    renderer.setSize(w, h, false);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 10);

    const uniforms = {
      uTex: { value: null as THREE.Texture | null },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uTime: { value: 0 },
      uIntensity: { value: 1.0 },
    };

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VS,
      fragmentShader: FS,
      transparent: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // load texture
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');
    loader.load(
      src,
      (tex) => {
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.generateMipmaps = false;
        uniforms.uTex.value = tex;
      },
      undefined,
      () => {
        // texture failed (CORS, 404, etc.) — leave canvas blank; the
        // underlying <img>'s onError fallback or gradient handles it.
      },
    );

    stateRef.current = {
      renderer,
      scene,
      camera,
      mesh,
      uniforms,
      mouseSmoothed: new THREE.Vector2(0.5, 0.5),
    };
  }, [active, src]);

  // render loop — only while active
  useEffect(() => {
    if (!active) return;
    const s = stateRef.current;
    if (!s) return;
    const start = performance.now();
    let raf = 0;
    const tick = () => {
      const t = (performance.now() - start) / 1000;
      s.uniforms.uTime.value = t;
      s.mouseSmoothed.lerp(new THREE.Vector2(mouse.x, mouse.y), 0.15);
      s.uniforms.uMouse.value.copy(s.mouseSmoothed);
      if (s.uniforms.uTex.value) {
        s.renderer.render(s.scene, s.camera);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, mouse.x, mouse.y]);

  // dispose on unmount
  useEffect(() => {
    return () => {
      const s = stateRef.current;
      if (!s) return;
      s.mesh.geometry.dispose();
      (s.mesh.material as THREE.Material).dispose();
      s.uniforms.uTex.value?.dispose();
      s.renderer.dispose();
      stateRef.current = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`portfolio-shader-canvas ${active ? 'is-active' : ''}`}
      aria-hidden
    />
  );
}
