import React from "react";
import data from "../data.json";

function Typesforplanet() {
  return (
    <div>
      {data.map((planet, index) => (
        <h2 key={index}>{planet.structure}</h2>
      ))}
    </div>
  );
}

export default Typesforplanet;
