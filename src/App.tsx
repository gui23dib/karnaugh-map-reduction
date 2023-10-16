/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import BasicButtonGroup from "./assets/components/Buttons";
import Title from "./assets/components/Title";
import "./index.css";

function App() {
  const [matrixSize, setMatrixSize] = useState({
    rows: 2,
    columns: 2,
  });

  const [matrix, setMatrix] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);

  return (
    <div className="flex flex-col items-center h-[90vh] justify-evenly">
      <Title />
      <div className="flex flex-row items-center justify-center">
        <form onSubmit={() => {}}>
          {matrix.map((row) => {
            return (
              <div className="flex flex-row">
                {row.map((e) => {
                  return <h1 className="m-4">{e}</h1>;
                })}
              </div>
            );
          })}
        </form>
      </div>
      <BasicButtonGroup />
    </div>
  );
}

export default App;
