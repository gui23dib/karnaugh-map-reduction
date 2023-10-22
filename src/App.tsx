/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import BasicButtonGroup from "./assets/components/Buttons";
import "./index.css";
import KMap from "./assets/components/KMap";
import { Button } from "@mui/material";
import { getMapReduction } from "./assets/controller/MapFunctions";
import { setVariablesBySize } from "./assets/controller/MapVariables";

function App() {
  const [matrixSize, setMatrixSize] = useState(4)
  const [matrix, setMatrix] = useState<number[][]>(createEmptyMatrix(matrixSize));
  const [reduction, setReduction] = useState<string>("")


  function createEmptyMatrix(X: number): number[][] {
    let matrix: number[][] = []
    if (X % 2 === 0) {
      const Y = Math.pow(2, X / 2);
      matrix = new Array(Y).fill(0).map(() => new Array(Y).fill(0));
    } else {
      const Y = Math.pow(2, Math.floor(X / 2));
      const Z = Y * 2;
      matrix = new Array(Y).fill(0).map(() => new Array(Z).fill(0));
    }
    return matrix;
  }

  function handleSubmit(){
    console.log('matrix', matrix)
    console.log('matrixSize', matrixSize)
    const x = setVariablesBySize(matrixSize)
    setReduction(getMapReduction(x, matrix))
  }

  function handleClear(){
    setMatrix(createEmptyMatrix(matrixSize))
    setReduction("")
  }

  useEffect(() => {
    console.log("render")
  }, [matrix])
  

  return (
    <div className="flex flex-col items-center h-[90vh] justify-evenly">
      <h1 className="m-6 font-bold text-center">Mapa de karnaugh</h1>
      <h2 className="m-6 font-bold text-center">{matrixSize} variables | {Math.pow(2, matrixSize)} values </h2>
      <form>
        <div className={`flex flex-row items-center justify-center ${matrixSize >= 7 ? matrixSize >= 8 ? "scale-25" : "scale-50" : "scale-100"}`}>
              <KMap matrix={matrix} setMatrix={setMatrix} />
        </div>
        <BasicButtonGroup btnFunction={(x: number) => setMatrix(createEmptyMatrix(x))} matrixSize={matrixSize} setMatrixSize={setMatrixSize}/>
        <Button onClick={() => handleClear()}>CLEAR</Button>
        <Button onClick={() => handleSubmit()}>REDUCE</Button>
      </form>
      <h1 className="m-6 font-bold text-center">{reduction}</h1>
    </div>
  );
}

export default App;
