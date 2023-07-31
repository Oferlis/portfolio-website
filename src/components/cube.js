import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const CubeMesh = (props) => {
  const cubeRef = useRef();

  useFrame(() => (cubeRef.current.rotation.x += 0.01));

  return (
    <mesh {...props} ref={cubeRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color={"orange"} />
    </mesh>
  );
};

const Cube = (props) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <CubeMesh position={[-1.2, 0, 0]} />
    </Canvas>
  );
};

export default Cube;
