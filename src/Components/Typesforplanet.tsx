import { useState } from "react";
import data from "../data.json";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import arrow from "/public/assets/icon-source.svg";

interface Planet {
  name: string;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  design: {
    overview_mobile: string;
    overview_tablet: string;
    overview_desktop: string;
  };
}

interface Params extends Record<string, string | undefined> {
  planet: string;
}

const Typesforplanet: React.FC = () => {
  const [images, setImages] = useState<string>("overview");
  const params = useParams<Params>();
  const planetName = params.planet;

  const planet = data.find(
    (object) => object.name.toLowerCase() === planetName?.toLowerCase()
  );

  const handleOverview = () => {
    setImages("overview");
  };

  const handleStructure = () => {
    setImages("structure");
  };

  const handleGeology = () => {
    setImages("geology");
  };

  return (
    <Maindiv planet={planet}>
      <div className="planets-div">
        <div className="header-box">
          <span onClick={handleOverview}>OVERVIEW</span>
          <span onClick={handleStructure}>Structure</span>
          <span onClick={handleGeology}>Surface</span>
        </div>
        <div className="info">
          <div>
            <img
              className="planetstyle"
              src={
                images === "structure"
                  ? planet?.images.internal
                  : images === "geology"
                  ? planet?.images.planet
                  : images === "overview"
                  ? planet?.images.planet
                  : undefined
              }
              alt={planetName}
            />
            {images === "geology" && (
              <img src={planet?.images.geology} className="planet-geogly" />
            )}
          </div>
        </div>
        <div className="information">
          <div className="only">
            <h1>{planet?.name}</h1>
            <p>{planet?.overview.content}</p>
            <h4 className="wikiped">
              Source:
              <a
                href={
                  images === "structure"
                    ? planet?.structure.source
                    : images === "geology"
                    ? planet?.geology.source
                    : images === "overview"
                    ? planet?.overview.source
                    : undefined
                }
              >
                <p>wikipedia</p>
              </a>
              <div>
                <img src={arrow} alt="arrow" />
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
};

const Maindiv = styled.div<{ planet?: Planet }>`
  .planets-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 1440px) {
      flex-direction: row;
      justify-content: space-evenly;
      max-width: 1440px;
      margin: auto;
    }
  }
  .header-box {
    display: flex;
    justify-content: space-between;
    padding: 1.25rem 1.5rem;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    @media (min-width: 770px) {
      display: none;
    }
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
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: relative;
    max-height: 500px;
    @media (min-width: 770px) {
      height: 300px;
      max-width: 700px;
    }
    .planet-geogly {
      width: 80px;
      height: 80px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -30%);
      top: 70%;
      z-index: 1;
      @media (min-width: 740px) {
        width: 130px;
        height: 130px;
      }
      @media (min-width: 1340px) {
        width: 150px;
        height: 170px;
        transform: translate(-50%, -10%);
      }
    }
    img {
      max-height: 500px;
      max-width: 500px;
      @media (min-width: 740px) {
        max-height: 350px;
        max-width: 350px;
      }
      @media (min-width: 1440px) {
        max-height: 500px;
        max-width: 500px;
      }
    }
    .planetstyle {
      width: ${(props) => props.planet?.design?.overview_mobile};
      @media (min-width: 740px) {
        width: ${(props) => props.planet?.design?.overview_tablet};
      }
      @media (min-width: 1440px) {
        width: ${(props) => props.planet?.design?.overview_desktop};
      }
    }
  }

  .information {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media (min-width: 770px) {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;
      text-align: unset;
    }
    @media (min-width: 1440px) {
      flex-direction: column;
    }
    .only {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
      align-items: center;
      justify-content: center;
      @media (min-width: 770px) {
        width: 350px;
        align-items: unset;
      }
      h1 {
        color: #ffffff;

        font-family: Antonio;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        @media (min-width: 1440px) {
          color: #fff;
          font-family: Antonio;
          font-size: 80px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-transform: uppercase;
        }
      }
      p {
        color: #fff;

        /* font-family: Spartan; */
        font-size: 11px;
        font-style: normal;
        opacity: 0.5;
        font-weight: 400;
        line-height: 22px;
        @media (min-width: 1440px) {
          color: #fff;
          font-family: Spartan;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 25px; /* 178.571% */
        }
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

      display: none;

      .infooo {
        width: 250px;
        height: 40px;
        display: flex;
        cursor: pointer;
        padding: 10px;
        align-items: center;
        gap: 10px;

        border: 1px solid #fff;
        @media (min-width: 1440px) {
          width: 350px;
          height: 48px;
          flex-shrink: 0;
          gap: 20px;
        }
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
      .infoo:hover {
        background-color: aqua;
      }
      @media (min-width: 740px) {
        display: block;
        padding: 20px;
        gap: 20px;
        display: flex;
      }
      @media (min-width: 1440px) {
        padding: 20px;
        gap: 20px;
        display: flex;
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
    @media (min-width: 770px) {
      flex-direction: row;
    }
    @media (min-width: 1440px) {
      flex-direction: row;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 1rem 1.5rem;
      @media (min-width: 770px) {
        flex-direction: column;
        align-items: flex-start;
        max-width: 255px;
        padding: 2rem 1.5rem 2.7rem 2.3rem;
      }
      .common-info-title {
        color: #fff;
        font-size: 0.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 200%;
        letter-spacing: 0.04544rem;
        text-transform: uppercase;
        opacity: 0.5;
        @media (min-width: 1440px) {
          color: #fff;
          font-family: Spartan;
          font-size: 11px;
          font-style: normal;
          font-weight: 700;
          line-height: 25px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
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
        @media (min-width: 1440px) {
          color: #fff;
          font-family: Antonio;
          font-size: 40px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -1.5px;
          text-transform: uppercase;
        }
      }
    }
  }
`;

export default Typesforplanet;
