import React, {useEffect, useRef} from "react";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {angleRadians} from "../utils/angle";
import {GUI} from "dat.gui";
import BlocksLevels from "./BlocksLevels";

const BuildingModal3d = () => {
  const gui = new GUI();
  const meshRef = useRef(null);

  useEffect(() => {
    if (meshRef.current) {
      gui.add(meshRef.current.scale, "x", 0, 2).name("X Axis");
      gui.add(meshRef.current.scale, "y", 0, 2).name("Y Axis");
      gui.add(meshRef.current.scale, "z", 0, 2).name("Z Axis");
      console.log(meshRef.current);
    }
  }, []);

  return (
    <>
      <PerspectiveCamera position={[-3, 4, 5]} makeDefault />
      <OrbitControls enableZoom={false} maxPolarAngle={angleRadians(85)} minPolarAngle={angleRadians(60)} />
      <mesh ref={meshRef}>
        {/* base */}
        <mesh position={[0, 0.1, 0]} castShadow>
          <boxGeometry args={[1.2, 0.2, 1.75]} />
          <meshStandardMaterial color="#a32f26" />
        </mesh>
        {/* base */}
        {/* level1 */}
        <BlocksLevels
          positionX={0}
          positionY={0.4}
          positionZ={0}
          geoParamsX={1.2}
          geoParamsY={0.4}
          geoParamsZ={1.75}
          windowHeight={0.4}
        />

        {/* level1 */}

        {/* divider */}
        <mesh position={[0, 0.615, 0]} castShadow>
          <boxGeometry args={[1.33, 0.03, 1.92]} />
          <meshStandardMaterial color="#808080" />
        </mesh>
        {/* divider */}

        {/* level2 */}
        <BlocksLevels
          positionX={0}
          positionY={0.83}
          positionZ={0}
          geoParamsX={1.2}
          geoParamsY={0.4}
          geoParamsZ={1.75}
          windowHeight={0.82}
        />
        {/* level2 */}

        {/* divider */}
        <mesh position={[0, 1.04, 0]} castShadow>
          <boxGeometry args={[1.33, 0.03, 1.92]} />
          <meshStandardMaterial color="#808080" />
        </mesh>
        {/* divider */}

        {/* level3 */}
        <BlocksLevels
          positionX={0}
          positionY={1.255}
          positionZ={0}
          geoParamsX={1.2}
          geoParamsY={0.4}
          geoParamsZ={1.75}
          windowHeight={1.24}
        />
        {/* level3 */}

        {/* divider */}
        <mesh position={[0, 1.45, 0]} castShadow>
          <boxGeometry args={[1.33, 0.03, 1.92]} />
          <meshStandardMaterial color="#808080" />
        </mesh>
        {/* divider */}

        {/* level4 */}
        <BlocksLevels
          positionX={0}
          positionY={1.66}
          positionZ={0}
          geoParamsX={1.2}
          geoParamsY={0.4}
          geoParamsZ={1.75}
          windowHeight={1.66}
        />
        {/* level4 */}

        {/* divider */}
        <mesh position={[0, 1.875, 0]} castShadow>
          <boxGeometry args={[1.33, 0.03, 1.92]} />
          <meshStandardMaterial color="#808080" />
        </mesh>
        {/* divider */}

        {/* level5 */}
        <BlocksLevels
          positionX={0}
          positionY={2.09}
          positionZ={0}
          geoParamsX={1.2}
          geoParamsY={0.4}
          geoParamsZ={1.75}
          windowHeight={2.07}
        />
        {/* level5 */}
      </mesh>
      {/* floor */}
      <mesh rotation={[-angleRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* floor */}

      <ambientLight args={["#ffffff", 0.5]} />
      <pointLight args={["#ffffff", 1]} position={[-3, 3, 2]} castShadow />
    </>
  );
};

export default BuildingModal3d;
