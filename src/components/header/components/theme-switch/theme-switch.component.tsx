import React from "react";
import { SwitchWrapper } from "./theme-switch.styles";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { toggleTheme } from "../../../../state/features/theme";

export const ThemeSwitch = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(toggleTheme());
  const isChecked = theme === "dark";

  return (
    <SwitchWrapper isChecked={isChecked}>
      <input
        type="checkbox"
        className="label__input"
        checked={isChecked}
        onChange={handleClick}
        aria-label="theme toggle"
      />

      <div className="label__circle"></div>
    </SwitchWrapper>
  );
};
