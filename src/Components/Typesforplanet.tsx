import React from "react";
import data from "../data.json";
import styled from "styled-components";

function Typesforplanet() {
  return (
    <Maindiv>
      <div className="header-box">
        <span>OVERVIEW</span>
        <span>Structure</span>
        <span>Surface</span>
      </div>
    </Maindiv>
  );
}
const Maindiv = styled.div`
  .header-box {
    display: flex;
    justify-content: space-between;
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    span {
      color: #fff;
      text-align: center;
      font-size: 0.7625rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.12056rem;
      text-transform: uppercase;
      opacity: 0.5;
      position: relative;
      transition: all 0.8s;
      cursor: pointer;
    }
    span:hover,
    span:focus {
      opacity: 1;
    }
    span::after {
      content: "";
      height: 3px;
      width: 100%;
      background-color: ${(props) => props.color};
      position: absolute;
      left: 0;
      bottom: -1.25rem;
      opacity: 0;
      transition: all 0.4s;
    }
    span:hover::after,
    span:focus::after {
      opacity: 0.7;
    }
  }
`;
export default Typesforplanet;
