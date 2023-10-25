/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import "./index.css";
import MapInterface from "./MapInterface";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapInterface />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
