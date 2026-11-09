
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Environment,
  useGLTF
} from "@react-three/drei";

function BurgerModel() {
  const { scene } = useGLTF("/models/burger.glb");

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.4}
    >
      <primitive
        object={scene}
        scale={1.5}
        position={[0, -0.7, 0]}
      />
    </Float>
  );
}

function FoodScene() {
  return (
    <div className="food-scene">

      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>

        <ambientLight intensity={1.5} />

        <directionalLight
          position={[3, 5, 4]}
          intensity={2}
          castShadow
        />

        <Suspense fallback={null}>
          <BurgerModel />
          <Environment preset="studio" />
        </Suspense>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={2}
        />

      </Canvas>

    </div>
  );
}

export default FoodScene;
