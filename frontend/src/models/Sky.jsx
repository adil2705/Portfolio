import React, { memo, useEffect, useRef } from "react";
import { useProgress } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Sky = memo(({ setLoadingProgress }) => {
  const { progress } = useProgress();
  const sky = useLoader(GLTFLoader, "./computer.glb");  // Ensure the path is correct
  const skyRef = useRef();

  // Rotate the model smoothly
  useFrame((state, delta) => {
    if (skyRef.current) {
      skyRef.current.rotation.y += delta / 5;  // Adjust speed
    }
  });

  // Update loading progress and make sure to clean up
  useEffect(() => {
    const handler = setTimeout(() => setLoadingProgress(progress), 100);
    return () => clearTimeout(handler);
  }, [progress, setLoadingProgress]);

  if (!sky) {
    return null;  // Return null if the model isn't loaded yet
  }

  return (
    <mesh ref={skyRef} scale={[10, 10, 10]} position={[0, 0, 0]}> {/* Adjusted scale */}
      <primitive object={sky.scene} />
    </mesh>
  );
});

export default Sky;
