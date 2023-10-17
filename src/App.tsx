/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import BasicButtonGroup from "./assets/components/Buttons";
import "./index.css";
import KMap from "./assets/components/KMap";

function App() {
  const [matrixSize, setMatrixSize] = useState(4)
  const [matrix, setMatrix] = useState<number[][]>(createEmptyMatrix(matrixSize));


  function createEmptyMatrix(X: number): number[][] {
    if (X % 2 === 0) {
      const Y = Math.pow(2, X / 2);
      const matriz: number[][] = new Array(Y).fill(0).map(() => new Array(Y).fill(0));
      return matriz;
    } else {
      const Y = Math.pow(2, Math.floor(X / 2));
      const Z = Y * 2;
      console.log(Y, Z)
      const matriz: number[][] = new Array(Y).fill(0).map(() => new Array(Z).fill(0));
      return matriz;
    }
  }
  
  return (
    <div className="flex flex-col items-center h-[90vh] justify-evenly">
      <h1 className="m-6 font-bold text-center">Mapa de karnaugh</h1>
      <h2 className="m-6 font-bold text-center">{matrixSize} variaveis | {Math.pow(2, matrixSize)} valores </h2>
      <div className={`flex flex-row items-center justify-center ${matrixSize >= 7 ? matrixSize >= 8 ? "scale-25" : "scale-50" : "scale-100"}`}>
        <form onSubmit={() => {}}>
            <KMap matrix={matrix} setMatrix={setMatrix} />
        </form>
      </div>
      <BasicButtonGroup btnFunction={(x: number) => setMatrix(createEmptyMatrix(x))} matrixSize={matrixSize} setMatrixSize={setMatrixSize}/>
    </div>
  );
}

export default App;
