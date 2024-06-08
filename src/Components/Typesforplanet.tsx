import { useState } from "react";
import data from "../data.json";
import styled from "styled-components";
import { useParams } from "react-router-dom";
function Typesforplanet() {
  const [images, setImages] = useState("overview");
  const params = useParams();
  const planetName = params.planet;

  // const planet = data.find((object) => object.name === planetName);
  const planet = data.find(
    (object) => object.name.toLowerCase() === planetName?.toLowerCase()
  );
  const handleOverview = () => {
    setImages("overview");
    setOpacity(opacity);
  };

  const handleStructure = () => {
    setImages("structure");
    setOpacity(opacity);
  };

  const handleGeology = () => {
    setImages("geology");
    setOpacity(opacity);
  };

  const [opacity, setOpacity] = useState(true);

  return (
    <Maindiv>
      <div className="header-box">
        <span onClick={handleOverview}>OVERVIEW</span>
        <span onClick={handleStructure}>Structure</span>
        <span onClick={handleGeology}>Surface</span>
      </div>
      <div className="info">
        <div>
          <img
            src={
              (images == "structure" && planet?.images.internal) ||
              (images == "geology" && planet?.images.planet) ||
              planet?.images.planet
            }
            alt={planetName}
          />
        </div>
      </div>
      <div className="information">
        <div className="only">
          <h1>{planet?.name}</h1>
          <p>{planet?.overview?.content}</p>
          <p>
            Source:{" "}
            <a
              href={
                (images == "structure" && planet?.structure.source) ||
                (images == "geology" && planet?.geology.source) ||
                planet?.overview.source
              }
            >
              Wikipedia
            </a>
          </p>
        </div>
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

  .information {
    display: flex;
    .only {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
      align-items: center;
      justify-content: center;
      h1 {
        color: #ffffff;
        text-align: center;
        font-family: Antonio;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
      }
      p {
        color: #fff;
        text-align: center;
        font-family: Spartan;
        font-size: 11px;
        font-style: normal;
        opacity: 0.5;
        font-weight: 400;
        line-height: 22px;
      }
    }
  }
`;

export default Typesforplanet;
