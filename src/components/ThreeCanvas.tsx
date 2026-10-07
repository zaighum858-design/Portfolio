import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  accentColor?: string;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ accentColor = '#ff6500' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Parse accent color
    const colorObj = new THREE.Color(accentColor);

    // Group for combined rotations
    const group = new THREE.Group();
    scene.add(group);

    // 1. Inner Icosahedron wireframe
    const icoGeometry = new THREE.IcosahedronGeometry(1.6, 2);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: colorObj,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const icoMesh = new THREE.Mesh(icoGeometry, wireframeMaterial);
    group.add(icoMesh);

    // 2. Glowing Nodes on vertices
    const pointsMat = new THREE.PointsMaterial({
      color: colorObj,
      size: 0.08,
      transparent: true,
      opacity: 0.85,
    });
    const pointsMesh = new THREE.Points(icoGeometry, pointsMat);
    group.add(pointsMesh);

    // 3. Surrounding Orbiting Rings for high-impact 3D depth
    const ringGeo1 = new THREE.TorusGeometry(2.3, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: colorObj,
      transparent: true,
      opacity: 0.45,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;
    ringMesh1.rotation.y = Math.PI / 6;
    group.add(ringMesh1);

    const ringGeo2 = new THREE.TorusGeometry(2.5, 0.012, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: colorObj,
      transparent: true,
      opacity: 0.3,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = -Math.PI / 4;
    ringMesh2.rotation.z = Math.PI / 5;
    group.add(ringMesh2);

    // Mouse Tracking for Interactive 3D Rotation
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleWindowMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      mouseX = (relX / window.innerWidth) * 2;
      mouseY = (relY / window.innerHeight) * 2;
      targetRotationY = mouseX * 1.8;
      targetRotationX = mouseY * 1.8;
    };

    window.addEventListener('mousemove', handleWindowMouseMove, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Constant gentle rotation in 3D
      icoMesh.rotation.y += 0.005;
      icoMesh.rotation.x += 0.003;
      ringMesh1.rotation.z += 0.004;
      ringMesh2.rotation.z -= 0.003;

      // Mouse interactive tilt with smooth damping (lerp)
      group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;

      // Subtle breathing scale pulse
      const scale = 1 + Math.sin(elapsedTime * 1.5) * 0.03;
      icoMesh.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });

    resizeObserver.observe(container);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleWindowMouseMove);
      resizeObserver.disconnect();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      icoGeometry.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      wireframeMaterial.dispose();
      pointsMat.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      renderer.dispose();
    };
  }, [accentColor]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[300px] flex items-center justify-center pointer-events-none select-none relative"
      aria-hidden="true"
    />
  );
};
