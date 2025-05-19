import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

const RotatingCube = () => {
  const meshRef = useRef(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1, 32]} />
      <meshLambertMaterial color="#468585" emissive="#468585" />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      camera={{ position: [0, 0, 5] }}
    >
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />

      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9cDBA6} />
      <color attach="background" args={['#F0F0F0']} />

      <RotatingCube />
    </Canvas>
  );
};

export default App;