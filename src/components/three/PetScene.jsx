import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Cena 3D principal do Hero.
 * Como não temos GLTF de pets, montamos cachorro e gato com primitivas
 * arredondadas + ícones veterinários flutuando ao redor.
 */

function StylizedDog({ position = [-1.3, -0.4, 0] }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.6) * 0.18 + 0.3;
    }
  });

  return (
    <group ref={ref} position={position} scale={0.95}>
      {/* Corpo */}
      <mesh position={[0, -0.05, 0]} castShadow>
        <capsuleGeometry args={[0.55, 0.6, 16, 32]} />
        <meshStandardMaterial color="#f6ecd6" roughness={0.45} metalness={0.05} />
      </mesh>
      {/* Cabeça */}
      <mesh position={[0, 0.8, 0.05]} castShadow>
        <sphereGeometry args={[0.55, 48, 48]} />
        <meshStandardMaterial color="#f6ecd6" roughness={0.4} />
      </mesh>
      {/* Focinho */}
      <mesh position={[0, 0.65, 0.55]}>
        <sphereGeometry args={[0.27, 32, 32]} />
        <meshStandardMaterial color="#eedcaf" roughness={0.35} />
      </mesh>
      {/* Nariz */}
      <mesh position={[0, 0.75, 0.78]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#1d584f" roughness={0.2} />
      </mesh>
      {/* Olhos */}
      <mesh position={[-0.18, 0.95, 0.5]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#0a2220" />
      </mesh>
      <mesh position={[0.18, 0.95, 0.5]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#0a2220" />
      </mesh>
      {/* Orelhas caídas */}
      <mesh position={[-0.42, 1.05, 0]} rotation={[0, 0, -0.5]} castShadow>
        <coneGeometry args={[0.2, 0.55, 24]} />
        <meshStandardMaterial color="#d8ad5b" roughness={0.5} />
      </mesh>
      <mesh position={[0.42, 1.05, 0]} rotation={[0, 0, 0.5]} castShadow>
        <coneGeometry args={[0.2, 0.55, 24]} />
        <meshStandardMaterial color="#d8ad5b" roughness={0.5} />
      </mesh>
      {/* Coleira aqua */}
      <mesh position={[0, 0.32, 0]}>
        <torusGeometry args={[0.4, 0.06, 16, 64]} />
        <meshStandardMaterial color="#54b6c6" roughness={0.3} metalness={0.4} />
      </mesh>
      {/* Patinhas */}
      <mesh position={[-0.25, -0.7, 0.3]}>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshStandardMaterial color="#eedcaf" />
      </mesh>
      <mesh position={[0.25, -0.7, 0.3]}>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshStandardMaterial color="#eedcaf" />
      </mesh>
      {/* Rabinho */}
      <mesh position={[0, 0, -0.55]} rotation={[0.6, 0, 0]}>
        <capsuleGeometry args={[0.07, 0.45, 12, 16]} />
        <meshStandardMaterial color="#f6ecd6" />
      </mesh>
    </group>
  );
}

function StylizedCat({ position = [1.3, -0.4, 0] }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y =
        -Math.sin(state.clock.elapsedTime * 0.55) * 0.15 - 0.3;
    }
  });

  return (
    <group ref={ref} position={position} scale={0.9}>
      {/* Corpo */}
      <mesh position={[0, -0.1, 0]} castShadow>
        <capsuleGeometry args={[0.5, 0.5, 16, 32]} />
        <meshStandardMaterial color="#aaded5" roughness={0.4} />
      </mesh>
      {/* Cabeça */}
      <mesh position={[0, 0.7, 0.05]} castShadow>
        <sphereGeometry args={[0.5, 48, 48]} />
        <meshStandardMaterial color="#aaded5" roughness={0.4} />
      </mesh>
      {/* Focinho */}
      <mesh position={[0, 0.6, 0.46]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial color="#d3efea" />
      </mesh>
      {/* Nariz */}
      <mesh position={[0, 0.68, 0.65]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#1d584f" />
      </mesh>
      {/* Olhos verde-petróleo */}
      <mesh position={[-0.16, 0.85, 0.42]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#1d584f" />
      </mesh>
      <mesh position={[0.16, 0.85, 0.42]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#1d584f" />
      </mesh>
      {/* Orelhas pontudas */}
      <mesh position={[-0.3, 1.15, 0]} rotation={[0, 0, -0.3]} castShadow>
        <coneGeometry args={[0.18, 0.45, 4]} />
        <meshStandardMaterial color="#83d0dc" />
      </mesh>
      <mesh position={[0.3, 1.15, 0]} rotation={[0, 0, 0.3]} castShadow>
        <coneGeometry args={[0.18, 0.45, 4]} />
        <meshStandardMaterial color="#83d0dc" />
      </mesh>
      {/* Coleira creme */}
      <mesh position={[0, 0.28, 0]}>
        <torusGeometry args={[0.35, 0.05, 16, 64]} />
        <meshStandardMaterial color="#f6ecd6" roughness={0.4} />
      </mesh>
      {/* Patinhas */}
      <mesh position={[-0.22, -0.6, 0.28]}>
        <sphereGeometry args={[0.15, 24, 24]} />
        <meshStandardMaterial color="#d3efea" />
      </mesh>
      <mesh position={[0.22, -0.6, 0.28]}>
        <sphereGeometry args={[0.15, 24, 24]} />
        <meshStandardMaterial color="#d3efea" />
      </mesh>
      {/* Rabinho curvo */}
      <mesh position={[0.35, 0.05, -0.45]} rotation={[0.3, 0.5, 0.8]}>
        <capsuleGeometry args={[0.06, 0.7, 12, 16]} />
        <meshStandardMaterial color="#83d0dc" />
      </mesh>
    </group>
  );
}

function FloatingItem({ position, color, geometry, speed = 1.5, rotIntensity = 1 }) {
  return (
    <Float
      speed={speed}
      rotationIntensity={rotIntensity}
      floatIntensity={1.4}
      floatingRange={[-0.15, 0.15]}
    >
      <mesh position={position} castShadow>
        {geometry}
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.25} />
      </mesh>
    </Float>
  );
}

function HeartShape({ position, color = '#d94747' }) {
  return (
    <Float speed={1.3} rotationIntensity={0.4} floatIntensity={1.6}>
      <group position={position} scale={0.16}>
        <mesh position={[-0.5, 0.3, 0]}>
          <sphereGeometry args={[0.7, 24, 24]} />
          <meshStandardMaterial color={color} roughness={0.3} />
        </mesh>
        <mesh position={[0.5, 0.3, 0]}>
          <sphereGeometry args={[0.7, 24, 24]} />
          <meshStandardMaterial color={color} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.4, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={color} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

function PawPrint({ position, color = '#f6ecd6', scale = 0.3 }) {
  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1.2}>
      <group position={position} scale={scale}>
        <mesh position={[0, -0.2, 0]}>
          <sphereGeometry args={[0.5, 24, 24]} />
          <meshStandardMaterial color={color} roughness={0.4} />
        </mesh>
        <mesh position={[-0.45, 0.45, 0]}>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshStandardMaterial color={color} roughness={0.4} />
        </mesh>
        <mesh position={[0.45, 0.45, 0]}>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshStandardMaterial color={color} roughness={0.4} />
        </mesh>
        <mesh position={[-0.15, 0.7, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color={color} roughness={0.4} />
        </mesh>
        <mesh position={[0.15, 0.7, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color={color} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  );
}

function CrossShield({ position }) {
  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.4}>
      <group position={position} scale={0.4}>
        {/* Escudo */}
        <mesh>
          <cylinderGeometry args={[0.5, 0.5, 0.15, 8]} />
          <meshStandardMaterial color="#1d584f" roughness={0.3} metalness={0.3} />
        </mesh>
        {/* Cruz */}
        <mesh position={[0, 0, 0.1]}>
          <boxGeometry args={[0.45, 0.12, 0.06]} />
          <meshStandardMaterial color="#f6ecd6" />
        </mesh>
        <mesh position={[0, 0, 0.1]}>
          <boxGeometry args={[0.12, 0.45, 0.06]} />
          <meshStandardMaterial color="#f6ecd6" />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-5, 3, -2]} intensity={0.4} color="#83d0dc" />
      <pointLight position={[0, -2, 3]} intensity={0.5} color="#f6ecd6" />

      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
        <StylizedDog />
      </Float>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
        <StylizedCat />
      </Float>

      {/* Ícones veterinários flutuando */}
      <PawPrint position={[-3, 1.6, 0]} color="#1d584f" scale={0.3} />
      <PawPrint position={[3.1, 0.8, -1]} color="#83d0dc" scale={0.35} />
      <HeartShape position={[-2.5, -0.6, 1]} color="#d94747" />
      <HeartShape position={[2.6, 1.4, 0.5]} color="#83d0dc" />
      <CrossShield position={[-3.2, 0.2, -0.5]} />

      {/* Cápsula */}
      <FloatingItem
        position={[2.8, -0.6, 0.6]}
        color="#54b6c6"
        geometry={<capsuleGeometry args={[0.13, 0.35, 16, 32]} />}
        speed={1.4}
      />
      {/* Cápsula 2 */}
      <FloatingItem
        position={[-2.2, 2, 0]}
        color="#d8ad5b"
        geometry={<capsuleGeometry args={[0.1, 0.28, 16, 32]} />}
        speed={1.8}
        rotIntensity={1.5}
      />
      {/* Esfera estetoscópica (decorativa) */}
      <FloatingItem
        position={[0, 2.1, -1]}
        color="#1d584f"
        geometry={<torusGeometry args={[0.25, 0.07, 16, 64]} />}
        speed={1.2}
      />

      <ContactShadows
        position={[0, -1.45, 0]}
        opacity={0.35}
        scale={8}
        blur={2.8}
        far={3}
        color="#1d584f"
      />
      <Environment preset="city" />
    </>
  );
}

export default function PetScene({ interactive = false }) {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 6], fov: 38 }}
      shadows
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <Scene />
        {interactive && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.9}
          />
        )}
      </Suspense>
    </Canvas>
  );
}
