import "./App.css";
import Navigation from "./Components/Navigation";
import Typesforplanet from "./Components/Typesforplanet";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to={"/earth"} />} />
        <Route path="/:planet" element={<Typesforplanet />} />
      </Routes>
    </>
  );
}

export default App;
