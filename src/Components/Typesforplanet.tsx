import { useState } from "react";
import data from "../data.json";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import arrow from "/public/assets/icon-source.svg";

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
            // style={{ width }}
            src={
              (images == "structure" && planet?.images.planet) ||
              (images == "geology" && planet?.images.internal) ||
              (images == "overview" && planet?.images.planet)
            }
            alt={planetName}
          />
          {images == "geology" ? <img src={planet?.images.planet} /> : null}
        </div>
      </div>
      <div className="information">
        <div className="only">
          <h1>{planet?.name}</h1>
          <p>{planet?.overview?.content}</p>
          <h4 className="wikiped">
            Source :
            <a
              href={
                (images == "structure" && planet?.structure.source) ||
                (images == "geology" && planet?.geology.source) ||
                (images == "overview" && planet?.images.geology)
              }
            >
              <p>wikipedia</p>
            </a>
            <div>
              <img src={arrow} alt="" />
            </div>
          </h4>
        </div>
        <div className="info-2">
          <div onClick={handleOverview} className="infooo">
            <p>
              01 <span>OVERVIEW</span>
            </p>
          </div>
          <div onClick={handleStructure} className="infooo">
            <p>
              02 <span>Structure</span>
            </p>
          </div>
          <div onClick={handleGeology} className="infooo">
            <p>
              03 <span>Surface</span>
            </p>
          </div>
        </div>
      </div>

      <div className="botombox">
        <div>
          <span className="common-info-title rot-time">ROTATION TIME</span>
          <span className="common-info">{planet?.rotation}</span>
        </div>
        <div>
          <span className="common-info-title rev-time">REVOLUTION TIME</span>
          <span className="common-info">{planet?.revolution}</span>
        </div>
        <div>
          <span className="common-info-title radius">radius</span>
          <span className="common-info">{planet?.radius}</span>
        </div>
        <div>
          <span className="common-info-title ave-temp">AVERAGE TEMP.</span>
          <span className="common-info">{planet?.temperature}</span>
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
    @media (min-width: 770px) {
      visibility: visible;
    }
  }

  .information {
    @media (min-width: 770px) {
      display: flex;
    }

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
        /* font-family: Spartan; */
        font-size: 11px;
        font-style: normal;
        opacity: 0.5;
        font-weight: 400;
        line-height: 22px;
      }
    }
    h4 {
      display: flex;
      color: #fff;
      /* font-family: Spartan; */
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px; /* 208.333% */
      gap: 5px;
      p {
        opacity: 0.5;
        color: #fff;
        /* font-family: Spartan; */
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px;
        text-decoration-line: underline;
      }
    }
    .info-2 {
      display: flex;
      flex-direction: column;
      gap: 20px;
      visibility: hidden;
      .infooo {
        width: 250px;
        height: 40px;
        display: flex;
        cursor: pointer;
        padding: 10px;
        align-items: center;
        gap: 10px;
        border: 1px solid #fff;
        span {
          color: #fff;
          font-family: Spartan;
          font-size: 9px;
          font-style: normal;
          font-weight: 700;
          line-height: 25px; /* 277.778% */
          letter-spacing: 1.929px;
          text-transform: uppercase;
        }
        p {
          color: #fff;
          font-family: Spartan;
          font-size: 9px;
          font-style: normal;
          font-weight: 700;
          line-height: 25px; /* 277.778% */
          letter-spacing: 1.929px;
          text-transform: uppercase;
        }
      }
      @media (min-width: 770px) {
        visibility: visible;
      }
    }
  }
  .botombox {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 1.5rem;
    gap: 1rem;
    margin-top: 1.75rem;
    margin-bottom: 2.76rem;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 1rem 1.5rem;

      .common-info-title {
        color: #fff;
        font-size: 0.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 200%;
        letter-spacing: 0.04544rem;
        text-transform: uppercase;
        opacity: 0.5;
      }

      .common-info {
        color: #fff;
        text-align: right;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.04688rem;
        text-transform: uppercase;
      }
    }
  }
`;

export default Typesforplanet;
