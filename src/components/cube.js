import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";

const CubeMesh = (props) => {
  const cubeRef = useRef();

  useFrame(() => (cubeRef.current.rotation.y += 0.01));

  return (
    <RoundedBox
      {...props}
      ref={cubeRef}
      args={[3, 3, 3]}
      radius={0.05}
      smoothness={4}
      creaseAngle={0.4}
      {...props}
    >
      <meshPhongMaterial color="#BDFFEF" wireframe />
    </RoundedBox>
  );
};

const Cube = (props) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <CubeMesh position={[0, 0, 0]} />
    </Canvas>
  );
};

export default Cube;
