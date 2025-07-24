// ThreeJsDotsComponent.tsx

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeJsDotsComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let dots: THREE.Points;

    // Initialize Three.js scene
    const init = () => {
      // Scene
      scene = new THREE.Scene();

      // Camera
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 100;

      // Renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (containerRef.current)
        containerRef.current.appendChild(renderer.domElement);

      // Dots
      const dotsGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(3000 * 3); // 3 coordinates per dot
      for (let i = 0; i < 3000; i++) {
        positions[i * 3] = Math.random() * 200 - 100; // x coordinate
        positions[i * 3 + 1] = Math.random() * 200 - 100; // y coordinate
        positions[i * 3 + 2] = Math.random() * 200 - 100; // z coordinate
      }
      dotsGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      const dotsMaterial = new THREE.PointsMaterial({ color: 0x888888 });
      dots = new THREE.Points(dotsGeometry, dotsMaterial);
      scene.add(dots);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        if (renderer && scene && camera) renderer.render(scene, camera);
      };

      animate();
    };

    // Resize handler
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    // Initialize Three.js scene
    init();

    // Event listeners
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      // Clean up Three.js objects
      if (scene && dots) {
        scene.remove(dots);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-screen h-screen" />;
};

export default ThreeJsDotsComponent;
