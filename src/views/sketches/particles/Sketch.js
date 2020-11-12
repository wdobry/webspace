import React, { useRef } from "react";
import { extend, Canvas, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });
function Controls() {
  const controls = useRef();
  const { camera, gl } = useThree();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableDamping
      dampingFactor={0.1}
      rotateSpeed={0.5}
    />
  );
}

const Plane = ({ position }) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const plane = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  const center = new THREE.Vector2(-50, 30);
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
        Math.sin(dist.length() / 5 + time * 2) * 4 +
        (Math.cos(dist2.length() / 5 + time * 4) * 2) / Math.random();
      mesh.current.geometry.verticesNeedUpdate = true;
    }
  });
  return (
    <points
      position={position}
      ref={mesh}
      rotation={[Math.PI / -0.75, 0, 0.75]}
    >
      <planeGeometry ref={plane} args={[100, 100, 200, 200]} />
      <pointsMaterial
        color={"white"}
        size={1}
        fog={true}
        sizeAttenuation={false}
      />
    </points>
  );
};

export const Sketch = () => {
  return (
    <div className="Particles">
      <Canvas pixelRatio={window.devicePixelRatio}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {/* <camera lookAt= */}
        {/* <Box position={[-1.2, 0, 0]} /> */}
        {/* <Box position={[1.2, 0, 0]} /> */}
        <camera />
        <fog attach="fog" args={["#000000", 100, 140]} />
        <Plane position={[0, 0, -25]} />
        <Controls />
      </Canvas>
    </div>
  );
};

export default Sketch;
