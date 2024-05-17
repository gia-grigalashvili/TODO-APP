/* eslint-disable react/prop-types */
import styled from "styled-components";
import moon from "/images/icon-moon.svg";
import sun from "/images/icon-sun.svg";

function Header({ toggleDarkMode, isDark }) {
  // function handleClick() {
  //   toggleDarkMode();
  // }

  return (
    <Headers>
      <h1>Todo</h1>
      <img src={isDark ? sun : moon} onClick={toggleDarkMode} />
    </Headers>
  );
}

const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 327px;

  h1 {
    color: rgb(255, 255, 255);
    letter-spacing: 10px;
    font-weight: 500;
    text-transform: uppercase;
  }

  img {
    cursor: pointer;
  }
`;

export default Header;
