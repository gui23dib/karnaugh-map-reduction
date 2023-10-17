/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import BasicButtonGroup from "./assets/components/Buttons";
import Title from "./assets/components/Title";
import "./index.css";
import MapTile from "./assets/components/MapTile";
import KMap from "./assets/components/KMap";

function App() {
  const [matrixSize, setMatrixSize] = useState<number[][]>(
    [
      [0, 1, 1, 1],
      [0, 1, 1, 0],
      [1, 1, 1, 0],
      [1, 1, 1, 0]
    ]
  );

  return (
    <div className="flex flex-col items-center h-[90vh] justify-evenly">
      <Title />
      <div className="flex flex-row items-center justify-center">
        <form onSubmit={() => {}}>
          <KMap matrix={matrixSize} /> 
        </form>
      </div>
      <BasicButtonGroup />
    </div>
  );
}

export default App;
