import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Cube(props) {
  const mesh = useRef();
  return (
    <Canvas>
      <ambientLight />
      <mesh ref={mesh}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}

export default Cube;
