import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './EthereumLogo3D.module.css';

export interface EthereumLogo3DProps {
  rotation?: { x: number; y: number; z: number };  // degrees per second
  topColor?: string;                               // hex color for top pyramid
  bottomColor?: string;                            // hex color for bottom pyramid
  opacity?: number;                                // 0-1
  scale?: number;                                  // size multiplier
  enableFog?: boolean;                            // scene fog
  enableVertexJitter?: boolean;                   // retro effect
  pauseRotation?: boolean;                        // pause/rotate pattern vs continuous
  className?: string;                             // additional CSS
}

const defaultProps: Required<EthereumLogo3DProps> = {
  rotation: { x: 0, y: 20, z: 0 },
  topColor: '#8c8cff',
  bottomColor: '#4c4ccc',
  opacity: 0.8,
  scale: 1.2,
  enableFog: true,
  enableVertexJitter: true,
  pauseRotation: true,
  className: '',
};

export function EthereumLogo3D(props: EthereumLogo3DProps) {
  const config = { ...defaultProps, ...props };
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    topPyramid: THREE.Mesh;
    bottomPyramid: THREE.Mesh;
    animationId: number | null;
  } | null>(null);

  // Initialize Three.js scene
  useEffect(() => {
    if (!canvasRef.current) return;

    // Shaders
    const vertexShader = config.enableVertexJitter
      ? `
      uniform float time;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        
        // Vertex snapping for retro effect
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float snapScale = 0.02;
        mvPosition.xyz = floor(mvPosition.xyz / snapScale) * snapScale;
        
        gl_Position = projectionMatrix * mvPosition;
      }
    `
      : `
      uniform float time;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform vec3 color;
      uniform float time;
      uniform float opacity;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vec3 light = normalize(vec3(1.0, 1.0, 1.0));
        float dProd = max(0.0, dot(vNormal, light));
        
        float brightness = floor(dProd * 4.0) / 4.0;
        brightness = brightness * 0.6 + 0.4;
        
        vec3 finalColor = color * brightness;
        gl_FragColor = vec4(finalColor, opacity);
      }
    `;

    // Scene setup
    const scene = new THREE.Scene();
    if (config.enableFog) {
      scene.fog = new THREE.Fog(0x000000, 10, 50);
    }

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const isMobile = window.innerWidth < 768;
    const pyramidMidpoint = 0.1; // Average of top and bottom Y positions
    camera.position.set(0, pyramidMidpoint + 1.5, isMobile ? 4 : 6);
    camera.lookAt(0, pyramidMidpoint, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: false,
      alpha: true, // Transparent background
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create materials for top and bottom pyramids
    const topMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(config.topColor) },
        time: { value: 0 },
        opacity: { value: config.opacity },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    const bottomMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(config.bottomColor) },
        time: { value: 0 },
        opacity: { value: config.opacity },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    // Create pyramids
    const logoScale = config.scale;

    const topPyramidGeometry = new THREE.ConeGeometry(
      logoScale,
      logoScale * 1.8,
      4
    );
    const topPyramid = new THREE.Mesh(topPyramidGeometry, topMaterial);
    topPyramid.position.y = 1.1 * logoScale;
    scene.add(topPyramid);

    const bottomPyramidGeometry = new THREE.ConeGeometry(
      logoScale,
      logoScale * 1.5,
      4
    );
    const bottomPyramid = new THREE.Mesh(bottomPyramidGeometry, bottomMaterial);
    bottomPyramid.position.y = -0.9 * logoScale;
    bottomPyramid.rotation.x = Math.PI; // Flip upside down
    scene.add(bottomPyramid);

    // Store refs
    sceneRef.current = {
      scene,
      camera,
      renderer,
      topPyramid,
      bottomPyramid,
      animationId: null,
    };

    // Animation
    let time = 0;
    let rotationPhaseTime = 0;
    let currentTargetAngle = 0;
    let isInPause = true;
    let pauseStartTime = 0;

    const PAUSE_DURATION = 2.0;
    const ROTATION_DISTANCE = Math.PI / 2; // 90°
    const BASE_ROTATION_SPEED = Math.PI / 4; // 90° / 2s
    const EASE_DURATION = 1.0;

    function animate() {
      if (!sceneRef.current) return;

      const { scene, camera, renderer, topPyramid, bottomPyramid } = sceneRef.current;

      const deltaTime = 0.016; // ~60fps
      time += deltaTime;

      if (config.pauseRotation) {
        // Pause/rotate pattern (from vector-eth)
        if (isInPause) {
          const pauseElapsed = time - pauseStartTime;
          if (pauseElapsed >= PAUSE_DURATION) {
            isInPause = false;
            rotationPhaseTime = 0;
            currentTargetAngle = (currentTargetAngle + Math.PI / 2) % (Math.PI * 2);
          }
        } else {
          rotationPhaseTime += deltaTime;
          const rotationDuration = ROTATION_DISTANCE / BASE_ROTATION_SPEED;
          const progress = Math.min(rotationPhaseTime / rotationDuration, 1);

          let easedProgress;
          const easeFraction = EASE_DURATION / rotationDuration;

          if (progress < easeFraction) {
            const t = progress / easeFraction;
            easedProgress = easeFraction * (1 - Math.cos(t * Math.PI / 2));
          } else if (progress > 1 - easeFraction) {
            const t = (progress - (1 - easeFraction)) / easeFraction;
            easedProgress = (1 - easeFraction) + easeFraction * Math.sin(t * Math.PI / 2);
          } else {
            easedProgress = progress;
          }

          const startAngle = (currentTargetAngle - ROTATION_DISTANCE + Math.PI * 4) % (Math.PI * 2);
          const currentAngle = startAngle + easedProgress * ROTATION_DISTANCE;

          topPyramid.rotation.y = currentAngle;
          bottomPyramid.rotation.y = currentAngle;

          if (progress >= 1) {
            isInPause = true;
            pauseStartTime = time;
            topPyramid.rotation.y = currentTargetAngle;
            bottomPyramid.rotation.y = currentTargetAngle;
          }
        }
      } else {
        // Continuous rotation
        const rotationSpeed = {
          x: (config.rotation.x * Math.PI) / 180,
          y: (config.rotation.y * Math.PI) / 180,
          z: (config.rotation.z * Math.PI) / 180,
        };

        topPyramid.rotation.x += rotationSpeed.x * deltaTime;
        topPyramid.rotation.y += rotationSpeed.y * deltaTime;
        topPyramid.rotation.z += rotationSpeed.z * deltaTime;

        bottomPyramid.rotation.x += rotationSpeed.x * deltaTime;
        bottomPyramid.rotation.y += rotationSpeed.y * deltaTime;
        bottomPyramid.rotation.z += rotationSpeed.z * deltaTime;
      }

      // Subtle bob animation
      topPyramid.position.y = 1.1 * logoScale + Math.sin(time) * 0.065;
      bottomPyramid.position.y = -0.9 * logoScale - Math.sin(time) * 0.065;

      // Update shader time
      (topPyramid.material as THREE.ShaderMaterial).uniforms.time.value = time;
      (bottomPyramid.material as THREE.ShaderMaterial).uniforms.time.value = time;

      renderer.render(scene, camera);
      sceneRef.current.animationId = requestAnimationFrame(animate);
    }

    animate();

    // Resize handler
    const handleResize = () => {
      if (!sceneRef.current) return;
      const { camera, renderer } = sceneRef.current;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current) {
        if (sceneRef.current.animationId) {
          cancelAnimationFrame(sceneRef.current.animationId);
        }
        sceneRef.current.topPyramid.geometry.dispose();
        (sceneRef.current.topPyramid.material as THREE.Material).dispose();
        sceneRef.current.bottomPyramid.geometry.dispose();
        (sceneRef.current.bottomPyramid.material as THREE.Material).dispose();
        sceneRef.current.renderer.dispose();
        sceneRef.current = null;
      }
    };
  }, [config.topColor, config.bottomColor, config.opacity, config.scale, config.enableFog, config.enableVertexJitter, config.pauseRotation, config.rotation.x, config.rotation.y, config.rotation.z]);

  return (
    <canvas
      ref={canvasRef}
      className={`${styles.canvas} ${config.className}`}
    />
  );
}
