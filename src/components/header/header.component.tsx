import React from "react";
import { Wrapper } from "./header.styles";
import logo from "../../assets/desktop/logo.svg";
import { ThemeSwitch } from "./components/theme-switch";
export const Header = () => {
  return (
    <Wrapper>
      <div className="header-container">
        <span>
          <img src={logo} alt="main logo" />
        </span>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </Wrapper>
  );
};
