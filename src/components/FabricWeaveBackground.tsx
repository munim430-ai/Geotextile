import { useRef, useEffect } from 'react'
import * as THREE from 'three'

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform float uFabricScale;
uniform float uDragIntensity;

varying vec2 vUv;

float fabricWarp(vec3 p, float scale) {
  float w = sin(p.x * scale * 3.0 + p.z * 0.5) * 0.15;
  return p.y - w * uDragIntensity;
}

float fabricWeft(vec3 p, float scale) {
  float w = cos(p.z * scale * 2.8 + p.x * 0.7) * 0.12;
  return p.y - w * uDragIntensity;
}

float threadGap(vec3 p, float scale) {
  float warp = sin(p.x * scale * 3.0) * 0.5 + 0.5;
  float weft = cos(p.z * scale * 2.8) * 0.5 + 0.5;
  return 1.0 - warp * weft * 0.3;
}

float getFabricDist(vec3 p, float scale) {
  float mWeave = sin(p.x * scale * 3.0) * cos(p.z * scale * 2.8);
  float weaveOffset = mWeave * 0.2 * uDragIntensity;
  float threadThick = 0.08 / scale;
  float dWarp = abs(fabricWarp(p, scale) - weaveOffset) - threadThick;
  float dWeft = abs(fabricWeft(p, scale) - weaveOffset) - threadThick;
  return min(dWarp, dWeft) * threadGap(p, scale);
}

vec3 fabricNormal(vec3 p, float scale) {
  float eps = 0.01;
  float d = getFabricDist(p, scale);
  vec3 n = vec3(
    d - getFabricDist(p - vec3(eps, 0, 0), scale),
    d - getFabricDist(p - vec3(0, eps, 0), scale),
    d - getFabricDist(p - vec3(0, 0, eps), scale)
  );
  return normalize(n);
}

vec3 softLight(vec3 base, vec3 blend) {
  vec3 lt = step(blend, vec3(0.5));
  return lt * (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) + (1.0 - lt) * (2.0 * sqrt(base) * blend - sqrt(base) + 2.0 * base * (1.0 - blend));
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  float cameraDist = 5.0;
  float cameraHeight = 3.0;
  vec3 ro = vec3(0.0, cameraHeight, -cameraDist);

  float angle = uTime * 0.05;
  mat2 rotY = mat2(cos(angle), sin(angle), -sin(angle), cos(angle));
  ro.xz = rotY * ro.xz;

  vec2 mouseOffset = (uMouse - 0.5) * vec2(2.0, 1.0);
  vec3 deformPos = ro + vec3(mouseOffset.x, mouseOffset.y * 0.5, 0.0);

  vec3 rd = normalize(vec3((uv - 0.5) * 2.0 * vec2(uResolution.x / uResolution.y, 1.0), 1.0));

  float t = 0.0;
  float maxDist = 15.0;
  float surfDist = 0.01;
  float scale = uFabricScale;

  for (int i = 0; i < 80; i++) {
    vec3 p = ro + rd * t;
    float d = getFabricDist(p, scale);
    float mouseDeform = length(p - deformPos);
    float deformStrength = exp(-mouseDeform * mouseDeform * 2.0) * 1.5;
    d -= deformStrength * 0.3;
    if (abs(d) < surfDist || t > maxDist) break;
    t += d * 0.5;
  }

  vec3 col = vec3(0.1, 0.18, 0.29);

  if (t < maxDist) {
    vec3 p = ro + rd * t;
    vec3 n = fabricNormal(p, scale);
    vec3 lightDir = normalize(vec3(0.5, 0.8, 0.3));
    float diff = max(dot(n, lightDir), 0.0);
    float shadow = smoothstep(0.0, 0.5, diff);

    vec3 fabricColor = vec3(0.06, 0.15, 0.1);
    vec3 highlightColor = vec3(1.0, 0.4, 0.0);

    float viewDot = max(dot(n, -rd), 0.0);
    float fresnel = pow(1.0 - viewDot, 3.0);
    vec3 blend = fabricColor * (0.2 + diff * 0.8);
    vec3 highlight = softLight(blend, highlightColor * fresnel);

    col = blend;
    float isHighlight = step(0.6, fresnel) * step(0.5, diff);
    col = mix(col, highlight, isHighlight * shadow * 0.5);
    col += vec3(0.2, 0.1, 0.05) * pow(fresnel, 2.0);
    float ao = 1.0 - smoothstep(0.0, 0.5, getFabricDist(p + n * 0.1, scale));
    col *= (0.7 + 0.3 * ao);
    col = mix(vec3(0.1, 0.18, 0.29), col, exp(-t * t * 0.02));
  }

  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`

export default function FabricWeaveBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 })
  const clockRef = useRef(new THREE.Clock())

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    const renderer = new THREE.WebGLRenderer({ antialias: false })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const uniforms = {
      uTime: { value: 0.0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
      uFabricScale: { value: 3.0 },
      uDragIntensity: { value: 1.0 },
    }

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    })

    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX / window.innerWidth
      mouseRef.current.targetY = 1.0 - e.clientY / window.innerHeight
    }

    const handleResize = () => {
      if (!container) return
      renderer.setSize(container.clientWidth, container.clientHeight)
      uniforms.uResolution.value.set(container.clientWidth, container.clientHeight)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    let animationId: number

    const animate = () => {
      animationId = requestAnimationFrame(animate)

      const mouse = mouseRef.current
      mouse.x += (mouse.targetX - mouse.x) * 0.05
      mouse.y += (mouse.targetY - mouse.y) * 0.05

      uniforms.uTime.value = clockRef.current.getElapsedTime()
      uniforms.uMouse.value.set(mouse.x, mouse.y)

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    />
  )
}
