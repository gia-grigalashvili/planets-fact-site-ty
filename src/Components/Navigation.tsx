import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import styled from "styled-components";
import hamburger from "/public/assets/icon-hamburger.svg";
import row from "/public/assets/icon-chevron.svg";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Header>
      <div className="only">
        <h1 className="headername">THE PLANETS</h1>
        <img
          className="burger"
          src={hamburger}
          alt="menu"
          onClick={toggleMenu}
        />
      </div>

      <Nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul>
          {data.map((planet, index) => (
            <Link key={index} to={`/${planet.name.toLowerCase()}`}>
              <li>
                <div className="maindiv">
                  <Color planetColor={planet.images.color} />
                  <h1>{planet.name}</h1>
                </div>
                <img src={row} alt="" />
              </li>
            </Link>
          ))}
        </ul>
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  .only {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    @media (min-width: 770px) {
      border-bottom: none;
      justify-content: center;
    }
    @media (min-width: 1330px) {
      border-bottom: none;
      justify-content: space-between;
    }
  }

  .headername {
    color: #fff;
    font-family: "Antonio", sans-serif;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: -1.05px;
    text-transform: uppercase;
  }

  .burger {
    width: 24px;
    height: 17px;
    cursor: pointer;
  }

  @media (min-width: 740px) {
    .burger {
      display: none;
    }
    .nav {
      display: flex;
      position: static;
      height: auto;
      width: auto;
      background: none;
      transform: none;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      gap: 20px;
      @media (min-width: 770px) {
        justify-content: center;
        width: 100%;
      }
    }
    .nav ul {
      flex-direction: row;
      padding: 0;
      margin: 0;
    }
    .nav li {
      border-bottom: none;
      padding: 0;
    }
    .nav li img {
      display: none;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 0;
  height: 100vh;
  width: 100%;
  background: #070724;
  padding: 10px;
  border-radius: 8px;
  transform: translateX(-100%);
  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;

  @media (min-width: 740px) {
    border-bottom: 1px solid gray;
  }
  &.open {
    transform: translateX(0);
    z-index: 10;
  }

  ul {
    list-style-type: none;
    gap: 20px;
    display: flex;
    flex-direction: column;
    background: #070724;
    padding: 20px;
    margin: 0;
  }

  li {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px;
    gap: 5px;
    cursor: pointer;
    font-family: "League Spartan", sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1.36px;
    color: #fff;
    @media (min-width: 770px) {
      font-size: 11px;
      color: #acacac;
      display: unset;
    }
  }

  li img {
    width: 4px;
    height: 8px;
    flex-shrink: 0;
  }

  .maindiv {
    display: flex;
    gap: 20px;
  }

  a {
    text-decoration: none;
  }
`;

interface ColorProps {
  planetColor: string;
}

const Color = styled.div<ColorProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.planetColor};
  @media (min-width: 740px) {
    background-color: transparent;
  }
`;

export default Navigation;
