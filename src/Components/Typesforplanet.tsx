import React from "react";
import data from "../data.json";
import styled from "styled-components";

function Typesforplanet() {
  return (
    <Maindiv>
      <div>
        <h2>overview</h2>
      </div>
      <div>
        <h2>Structure</h2>
      </div>
      <div>
        <h2>Surface</h2>
      </div>
    </Maindiv>
  );
}
const Maindiv = styled.div`
  display: flex;

  color: #fff;
  text-align: center;
  font-family: Spartan;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.929px;
  text-transform: uppercase;
`;
export default Typesforplanet;
