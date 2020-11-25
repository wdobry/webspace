import React, { useReducer, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";

import { useParams } from "react-router";

// import { Sphere, PositionalAudio } from "drei";
// import { Controls, useControl } from "react-three-gui";

// const Analyzer = ({ sound }) => {
//   // <Analyzer /> will not run before everything else in the suspense block is resolved.
//   // That means <PositionalAudio/>, which executes async, is ready by the time we're here.
//   // The next frame (useEffect) is guaranteed(!) to access positional-audios ref.
//   const mesh = useRef();
//   const analyser = useRef();
//   useEffect(
//     () => void (analyser.current = new THREE.AudioAnalyser(sound.current, 32))
//   );
//   useFrame(() => {
//     if (analyser.current) {
//       const data = analyser.current.getAverageFrequency();
//       mesh.material.color.setRGB(data / 100, 0, 0);
//       mesh.current.scale.x = mesh.current.scale.y = mesh.current.scale.z =
//         (data / 100) * 2;
//     }
//   });
//   return (
//     <Sphere ref={mesh} args={[1, 64, 64]}>
//       <meshBasicMaterial attach="material" />
//     </Sphere>
//   );
// };

// const PlaySound = ({ url }) => {
//   // This component creates a suspense block, blocking execution until
//   // all async tasks (in this case PositionAudio) have been resolved.
//   const sound = useRef();
//   return (
//     <Suspense fallback={null}>
//       <PositionalAudio url={url} ref={sound} />
//       <Analyzer sound={sound} />
//     </Suspense>
//   );
// };

const getRandomArbitrary = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Plane = ({ position, rotation, wave1, wave2, currentZoom }) => {
  const mesh = useRef();
  const plane = useRef();

  const pos1 = new THREE.Vector2(wave1.positionX, wave1.positionY);
  const pos2 = new THREE.Vector2(wave2.positionX, wave2.positionY);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const vLength = mesh.current.geometry.vertices.length;

    const wave1animate = wave1.animate ? time : 1;
    const wave2animate = wave2.animate ? time : 1;

    for (let i = 0; i < vLength; i++) {
      let v = mesh.current.geometry.vertices[i];

      let dist1 = new THREE.Vector2(v.x, v.y).sub(pos1);
      let dist2 = new THREE.Vector2(v.x, v.y).sub(pos2);

      let wave1function =
        Math.sin(dist1.length() / wave1.freq + (wave1animate * 10) / 4) *
          wave1.mag -
        getRandomArbitrary(1, 1 + wave1.noise * 75);

      let wave2function =
        Math.cos(dist2.length() / wave2.freq + (wave2animate * 10) / 4) *
          wave2.mag -
        getRandomArbitrary(1, 1 + wave2.noise * 75);

      v.z = wave1function + wave2function;

      mesh.current.geometry.verticesNeedUpdate = true;
    }
  });
  return (
    <points
      position={position}
      ref={mesh}
      rotation={[Math.PI * rotation.rx, 0, Math.PI * rotation.ry]}
    >
      <planeGeometry ref={plane} args={[100, 100, 200, 200]} />
      <pointsMaterial
        color={"rgb(255, 255, 255)"}
        size={1}
        fog={true}
        sizeAttenuation={false}
      />
    </points>
  );
};

const Input = ({ dispatch, wave, setup }) => {
  return (
    <div className="lay-stack-vertical mar-b-1">
      <p className="f-l-1">
        {setup[0]}: {wave[setup[0]]}
      </p>
      <input
        type="range"
        min={setup[1]}
        max={setup[2]}
        step={setup[3]}
        defaultValue={setup[4]}
        onChange={(e) =>
          dispatch({
            type: "FIELD",
            field: setup[0],
            value: e.currentTarget.value,
          })
        }
      />
    </div>
  );
};

const Camera = (props) => {
  const ref = useRef();
  const { setDefaultCamera } = useThree();
  useEffect(() => void setDefaultCamera(ref.current), [setDefaultCamera]);
  useFrame(() => ref.current.updateMatrixWorld());
  return <perspectiveCamera ref={ref} {...props} />;
};

const WaveControls = ({ name, waveInit, wave, dispatch }) => {
  return (
    <div className="lay-stack-vertical" style={{ width: "20%" }}>
      <p className="f-l-1 mar-b-1">{name}</p>
      <Input
        dispatch={dispatch}
        wave={wave}
        setup={["freq", 1, 20, 0.25, waveInit.freq]}
      />
      <Input
        dispatch={dispatch}
        wave={wave}
        setup={["mag", 1, 20, 0.25, waveInit.mag]}
      />
      <Input
        dispatch={dispatch}
        wave={wave}
        setup={["noise", 0, 0.1, 0.01, waveInit.noise]}
      />
      <Input
        dispatch={dispatch}
        wave={wave}
        setup={["positionX", -50, 50, 25, waveInit.positionX]}
      />
      <Input
        dispatch={dispatch}
        wave={wave}
        setup={["positionY", -50, 50, 25, waveInit.positionY]}
      />
      {wave.animate ? (
        <button
          className="button-primary"
          onClick={() =>
            dispatch({
              type: "FIELD",
              field: "animate",
              value: false,
            })
          }
        >
          Stop
        </button>
      ) : (
        <button
          className="button-primary"
          onClick={() =>
            dispatch({
              type: "FIELD",
              field: "animate",
              value: true,
            })
          }
        >
          Animate
        </button>
      )}
    </div>
  );
};

export const Sketch = () => {
  const {
    w1f,
    w1m,
    w1n,
    w1px,
    w1py,
    w2f,
    w2m,
    w2n,
    w2px,
    w2py,
    cx,
    cy,
    cz,
    crx,
    cry,
  } = useParams();

  const wave1init = {
    positionX: w1px,
    positionY: w1py,
    freq: w1f,
    mag: w1m,
    noise: w1n,
    animate: false,
  };

  const wave2init = {
    positionX: w2px,
    positionY: w2py,
    freq: w2f,
    mag: w2m,
    noise: w2n,
    animate: false,
  };

  const camInit = {
    x: cx,
    y: cy,
    z: cz,
    zoom: 0,
  };

  const rotationInit = {
    rx: crx,
    ry: cry,
  };

  const wave1Reducer = (state, action) => {
    switch (action.type) {
      case "FIELD": {
        return {
          ...state,
          [action.field]: action.value,
        };
      }
      default:
        break;
    }
  };

  const wave2Reducer = (state, action) => {
    switch (action.type) {
      case "FIELD": {
        return {
          ...state,
          [action.field]: action.value,
        };
      }
      default:
        break;
    }
  };

  const camReducer = (state, action) => {
    switch (action.type) {
      case "FIELD": {
        return {
          ...state,
          [action.field]: action.value,
        };
      }
      default:
        break;
    }
  };

  const rotationReducer = (state, action) => {
    switch (action.type) {
      case "FIELD": {
        return {
          ...state,
          [action.field]: action.value,
        };
      }
      default:
        break;
    }
  };

  const [wave1, wave1dispatch] = useReducer(wave1Reducer, wave1init);
  const [wave2, wave2dispatch] = useReducer(wave2Reducer, wave2init);
  const [cam, camDispatch] = useReducer(camReducer, camInit);
  const [rotation, rotationDispatch] = useReducer(
    rotationReducer,
    rotationInit
  );

  useEffect(() => {
    const wave1path = `${wave1.freq}/${wave1.mag}/${wave1.noise}/${wave1.positionX}/${wave1.positionY}`;
    const wave2path = `${wave2.freq}/${wave2.mag}/${wave2.noise}/${wave2.positionX}/${wave2.positionY}`;
    const camPath = `${cam.x}/${cam.y}/${cam.z}/${rotation.rx}/${rotation.ry}`;
    window.history.replaceState(
      null,
      "New Page Title",
      `/sketches/particles/${wave1path}/${wave2path}/${camPath}`
    );
  }, [wave1, wave2, cam, rotation]);

  return (
    <div
      className="Particles lay-stack-horizontal"
      style={{ justifyContent: "space-between" }}
    >
      <WaveControls
        name="Wave 1 - sin"
        waveInit={wave1init}
        wave={wave1}
        dispatch={wave1dispatch}
      />
      <WaveControls
        name="Wave 2 - cos"
        waveInit={wave2init}
        wave={wave2}
        dispatch={wave2dispatch}
      />
      <div className="lay-stack-vertical" style={{ width: "20%" }}>
        <p className="f-l-1 mar-b-1">Camera</p>
        <Input
          dispatch={camDispatch}
          wave={cam}
          setup={["x", -75, 75, 25, camInit.x]}
        />
        <Input
          dispatch={camDispatch}
          wave={cam}
          setup={["y", -75, 75, 25, camInit.y]}
        />
        <Input
          dispatch={camDispatch}
          wave={cam}
          setup={["z", 50, 200, 25, camInit.z]}
        />
        <Input
          dispatch={rotationDispatch}
          wave={rotation}
          setup={["rx", -1, 1, 0.125, rotationInit.rx]}
        />
        <Input
          dispatch={rotationDispatch}
          wave={rotation}
          setup={["ry", -1, 1, 0.25, rotationInit.rx]}
        />
      </div>
      <div
        style={{
          width: "24rem",
          height: "24rem",
          border: "1px solid var(--color-fg-4)",
        }}
      >
        <Canvas pixelRatio={window.devicePixelRatio} concurrent>
          {/* <ambientLight intensity={0.5} /> */}
          {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
          {/* <pointLight position={[-10, -10, -10]} /> */}
          <fog attach="fog" args={["#000000", 50, 10]} />
          <Camera position={[cam.x, cam.y, cam.z]} lookAt />
          <Plane
            position={[0, 0, 25]}
            rotation={rotation}
            wave1={wave1}
            wave2={wave2}
            currentZoom={cam.z}
          />
          {/* <PlaySound url="Exhaust.mp3" /> */}
        </Canvas>
      </div>
    </div>
  );
};

export default Sketch;
