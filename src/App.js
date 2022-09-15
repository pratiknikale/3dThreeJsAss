import React from "react";
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import ThreedBuildModal from "./components/BuildingModal3d";
import "./App.css";

function App() {
  return (
    <Canvas id="three-canvas-container" shadows>
      <Suspense fallback={null}>
        <ThreedBuildModal />
      </Suspense>
    </Canvas>
  );
}

export default App;
