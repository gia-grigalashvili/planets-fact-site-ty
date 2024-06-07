import React from "react";
import data from "../data.json";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {data.map((planet, index) => (
            <li key={index}>{planet.name}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
