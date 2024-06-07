import "./App.css";
import Navigation from "./Components/Navigation";
import Typesforplanet from "./Components/Typesforplanet";
import { Route, Routes } from "react-router";
function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path={"/:Typesforplanet"} element={<Typesforplanet />}></Route>
      </Routes>
    </>
  );
}

export default App;
