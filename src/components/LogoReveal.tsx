import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

function LogoMesh() {
  return (
    <group>
      <mesh rotation={[Math.PI / 4, Math.PI / 6, 0]}>
        <torusKnotGeometry args={[1.2, 0.28, 120, 18, 2, 3]} />
        <meshStandardMaterial color="#00C2FF" emissive="#00C2FF" emissiveIntensity={0.4} metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh rotation={[-Math.PI / 3, -Math.PI / 5, 0]}>
        <torusGeometry args={[2, 0.08, 60, 100]} />
        <meshStandardMaterial color="#E63946" emissive="#E63946" emissiveIntensity={0.35} metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

export function LogoReveal() {
  return (
    <div className="relative h-64 w-64 overflow-hidden rounded-full border border-neon/40 bg-night/60 shadow-neon">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <color attach="background" args={[0, 0, 0]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.4} color="#00C2FF" />
        <pointLight position={[-5, -3, -4]} intensity={1.1} color="#E63946" />
        <Suspense fallback={null}>
          <LogoMesh />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.6} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 rounded-full border border-white/10" />
    </div>
  );
}
