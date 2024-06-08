import "./App.css";
import Navigation from "./Components/Navigation";
import Typesforplanet from "./Components/Typesforplanet";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/:planet" element={<Typesforplanet />} />
      </Routes>
    </>
  );
}

export default App;
