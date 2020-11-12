import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

const Plane = ({ position }) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const plane = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  const center = new THREE.Vector2(0, 0);
  const left = new THREE.Vector2(-50, 0);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const vLength = mesh.current.geometry.vertices.length;
    // mesh.current.rotation.x = mesh.current.rotation.y += 0.03;
    for (let i = 0; i < vLength; i++) {
      let v = mesh.current.geometry.vertices[i];
      let dist = new THREE.Vector2(v.x, v.y).sub(center);
      let dist2 = new THREE.Vector2(v.x, v.y).sub(left);

      v.z =
        Math.sin(dist.length() / 5 + time) * 15 +
        Math.cos(dist2.length() / 5 + time) * 8;
      mesh.current.geometry.verticesNeedUpdate = true;
    }
  });
  return (
    <points position={position} ref={mesh} rotation={[Math.PI / 0.5, 0, 0.75]}>
      <planeGeometry ref={plane} args={[100, 100, 200, 200]} />
      <pointsMaterial color={"white"} size={0.25} />
    </points>
  );
};

export const Sketch = () => {
  return (
    <div className="Particles">
      <Canvas pixelRatio={window.devicePixelRatio}>
        <ambientLight intensity={0.5} />
        {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
        {/* <pointLight position={[-10, -10, -10]} /> */}
        {/* <camera lookAt= */}
        {/* <Box position={[-1.2, 0, 0]} /> */}
        {/* <Box position={[1.2, 0, 0]} /> */}
        <Plane position={[0, 0, -25]} />
      </Canvas>
    </div>
  );
};

export default Sketch;
