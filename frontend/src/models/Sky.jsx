import React, { memo, useEffect, useRef, useMemo } from "react";
import { useProgress } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Sky = memo(({ setLoadingProgress }) => {
  const { progress } = useProgress();
  const sky = useLoader(GLTFLoader, "./sky.glb");
  const skyRef = useRef();

  // Rotate the model continuously
  useFrame((state, delta) => {
    if (skyRef.current) {
      skyRef.current.rotation.y += delta / 40;
    }
  });

  // Update loading progress
  useEffect(() => {
    const handler = setTimeout(() => setLoadingProgress(progress), 100);
    return () => clearTimeout(handler);
  }, [progress, setLoadingProgress]);

  // Memoizing the mesh component for performance
  const mesh = useMemo(() => {
    return (
      sky && (
        <mesh ref={skyRef} scale={[40, 40, 40]}>
          <primitive object={sky.scene} />
        </mesh>
      )
    );
  }, [sky]);

  return mesh;
});

export default Sky;
