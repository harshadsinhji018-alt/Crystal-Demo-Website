import {useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';

const _targetVec = new THREE.Vector3();

function detectSoftwareGl(): boolean {
  try {
    const probeCanvas = document.createElement('canvas');
    const gl = probeCanvas.getContext('webgl2');
    if (!gl) return true;
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
    const gpu = String(gl.getParameter(param) || '');
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
  } catch {
    return true;
  }
}

function createParticleTexture(): THREE.CanvasTexture {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2,
    );
    gradient.addColorStop(0, 'rgba(255, 244, 210, 1)');
    gradient.addColorStop(0.3, 'rgba(212, 175, 55, 0.78)');
    gradient.addColorStop(0.7, 'rgba(212, 175, 55, 0.16)');
    gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function LuxuryThreeBackdrop() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const pointerRef = useRef({x: 0, y: 0});
  const scrollRef = useRef(0);
  const [contextLost, setContextLost] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const isSoftwareGl = detectSoftwareGl();

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setContextLost(true);
      return;
    }

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.setPixelRatio(
      isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2),
    );
    renderer.setClearColor(0x000000, 0);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    renderer.setSize(width, height);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040812, 0.035);

    const camera = new THREE.PerspectiveCamera(44, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 12.5);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envTexture = pmremGenerator.fromScene(
      new RoomEnvironment(),
      0.04,
    ).texture;
    scene.environment = envTexture;
    pmremGenerator.dispose();

    // Three-point warm/cool studio lighting rig
    const hemiLight = new THREE.HemisphereLight(0x9ab7e8, 0x10192b, 0.65);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xffe6b3, 1.8);
    keyLight.position.set(6, 8, 7);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x6d93d6, 1.1);
    rimLight.position.set(-7, -3, -6);
    scene.add(rimLight);

    // Composite 7-part architectural crystal & champagne-gold prism sculpture
    const sculptureGroup = new THREE.Group();
    sculptureGroup.position.set(3.4, 0.25, -1.5);
    scene.add(sculptureGroup);

    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xd9b54a,
      metalness: 0.94,
      roughness: 0.18,
      anisotropy: 0.75,
      clearcoat: 0.5,
      clearcoatRoughness: 0.15,
    });

    const darkBronzeMaterial = new THREE.MeshStandardMaterial({
      color: 0x14223d,
      metalness: 0.55,
      roughness: 0.48,
    });

    const crystalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf7f3eb,
      metalness: 0.1,
      roughness: 0.08,
      transmission: isSoftwareGl ? 0 : 0.78,
      transparent: true,
      opacity: isSoftwareGl ? 0.34 : 0.92,
      ior: 1.7,
      thickness: 1.2,
      clearcoat: 1.0,
      depthWrite: false,
    });

    const geometries: THREE.BufferGeometry[] = [];

    // 1. Primary outer faceted architectural ring
    const outerRingGeo = new THREE.TorusGeometry(2.65, 0.032, 16, 96);
    geometries.push(outerRingGeo);
    const outerRing = new THREE.Mesh(outerRingGeo, goldMaterial);
    outerRing.rotation.x = Math.PI / 3.4;
    sculptureGroup.add(outerRing);

    // 2. Secondary counter-angled midnight ring
    const midRingGeo = new THREE.TorusGeometry(2.15, 0.048, 16, 80);
    geometries.push(midRingGeo);
    const midRing = new THREE.Mesh(midRingGeo, darkBronzeMaterial);
    midRing.rotation.y = Math.PI / 4;
    midRing.rotation.x = -Math.PI / 5;
    sculptureGroup.add(midRing);

    // 3. Inner slender champagne halo
    const innerRingGeo = new THREE.TorusGeometry(1.55, 0.024, 14, 72);
    geometries.push(innerRingGeo);
    const innerRing = new THREE.Mesh(innerRingGeo, goldMaterial);
    innerRing.rotation.z = Math.PI / 6;
    sculptureGroup.add(innerRing);

    // 4. Faceted crystal core spire (Lathe-inspired double octahedron silhouette)
    const coreGeo = new THREE.OctahedronGeometry(0.95, 0);
    coreGeo.scale(0.85, 1.45, 0.85);
    geometries.push(coreGeo);
    const crystalCore = new THREE.Mesh(coreGeo, crystalMaterial);
    crystalCore.renderOrder = 2;
    sculptureGroup.add(crystalCore);

    // 5. Gold wireframe bevel cage around crystal core
    const cageGeo = new THREE.OctahedronGeometry(1.12, 0);
    cageGeo.scale(0.88, 1.5, 0.88);
    geometries.push(cageGeo);
    const cageEdges = new THREE.EdgesGeometry(cageGeo);
    geometries.push(cageEdges);
    const cageLineMat = new THREE.LineBasicMaterial({
      color: 0xe6cb7a,
      transparent: true,
      opacity: 0.62,
    });
    const crystalCage = new THREE.LineSegments(cageEdges, cageLineMat);
    sculptureGroup.add(crystalCage);

    // 6 & 7. Orbiting architectural finial accents
    const finialGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.55, 8);
    geometries.push(finialGeo);
    const topFinial = new THREE.Mesh(finialGeo, goldMaterial);
    topFinial.position.set(0, 1.85, 0);
    sculptureGroup.add(topFinial);

    const bottomFinial = new THREE.Mesh(finialGeo, goldMaterial);
    bottomFinial.position.set(0, -1.85, 0);
    sculptureGroup.add(bottomFinial);

    // Floating champagne-gold particle dust field
    const particleCount = 180;
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
      speeds[i] = 0.15 + Math.random() * 0.35;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3),
    );
    geometries.push(particleGeo);

    const particleTexture = createParticleTexture();
    const particleMat = new THREE.PointsMaterial({
      size: 0.16,
      map: particleTexture,
      transparent: true,
      opacity: 0.82,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: 0xf4dc92,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Interaction & scroll parallax listeners
    const onPointerMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      pointerRef.current.x = nx;
      pointerRef.current.y = ny;
    };

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const onContextLost = (e: Event) => {
      e.preventDefault();
      setContextLost(true);
    };

    const onContextRestored = () => {
      setContextLost(false);
    };

    window.addEventListener('pointermove', onPointerMove, {passive: true});
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onResize);
    renderer.domElement.addEventListener('webglcontextlost', onContextLost);
    renderer.domElement.addEventListener(
      'webglcontextrestored',
      onContextRestored,
    );

    if (!isSoftwareGl) {
      renderer.compile(scene, camera);
    }

    const clock = new THREE.Clock();
    let frameId = 0;
    let disposed = false;

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        if (disposed) {
          if (sync) gl.deleteSync(sync);
          return;
        }
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          if (sync) gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    function tick() {
      if (disposed) return;
      const delta = Math.min(clock.getDelta(), 0.08);
      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        outerRing.rotation.z += delta * 0.14;
        midRing.rotation.y += delta * 0.19;
        innerRing.rotation.x -= delta * 0.22;
        crystalCore.rotation.y += delta * 0.25;
        crystalCage.rotation.y += delta * 0.25;
        sculptureGroup.position.y = 0.25 + Math.sin(elapsed * 0.7) * 0.14;

        // Subtle particle drift
        const posAttr = particleGeo.getAttribute(
          'position',
        ) as THREE.BufferAttribute;
        for (let i = 0; i < particleCount; i++) {
          let y = posAttr.getY(i) + speeds[i] * delta * 0.45;
          if (y > 7) y = -7;
          posAttr.setY(i, y);
        }
        posAttr.needsUpdate = true;
      }

      // Smooth damped camera parallax
      const scrollNorm = Math.min(scrollRef.current / 900, 1);
      const targetCamX = pointerRef.current.x * 0.55;
      const targetCamY = 0.4 + pointerRef.current.y * 0.35 - scrollNorm * 0.85;

      camera.position.x = THREE.MathUtils.damp(
        camera.position.x,
        targetCamX,
        3.2,
        delta,
      );
      camera.position.y = THREE.MathUtils.damp(
        camera.position.y,
        targetCamY,
        3.2,
        delta,
      );

      _targetVec.set(1.2, -scrollNorm * 0.5, -1);
      camera.lookAt(_targetVec);

      renderer.render(scene, camera);

      if (prefersReducedMotion) return;

      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        frameId = window.requestAnimationFrame(tick);
      }
    }

    tick();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(frameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      renderer.domElement.removeEventListener('webglcontextlost', onContextLost);
      renderer.domElement.removeEventListener(
        'webglcontextrestored',
        onContextRestored,
      );

      geometries.forEach((g) => g.dispose());
      goldMaterial.dispose();
      darkBronzeMaterial.dispose();
      crystalMaterial.dispose();
      cageLineMat.dispose();
      particleMat.dispose();
      particleTexture.dispose();
      envTexture.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (contextLost) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial from-[#D4AF37]/12 via-transparent to-transparent"
      />
    );
  }

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[2]"
    />
  );
}
