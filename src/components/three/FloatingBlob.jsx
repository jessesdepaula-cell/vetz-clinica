import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

/**
 * Blob 3D decorativo para fundos de seção.
 * Forma orgânica abstrata inspirada no universo pet/veterinário.
 */
export default function FloatingBlob({ color = '#83d0dc', distort = 0.4, speed = 2 }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={0.8} />
      <Suspense fallback={null}>
        <Float speed={speed} rotationIntensity={1} floatIntensity={1.2}>
          <mesh>
            <sphereGeometry args={[1.2, 64, 64]} />
            <MeshDistortMaterial
              color={color}
              distort={distort}
              speed={2}
              roughness={0.25}
              metalness={0.1}
            />
          </mesh>
        </Float>
      </Suspense>
    </Canvas>
  );
}
