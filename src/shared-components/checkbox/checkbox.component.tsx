import React from "react";
import { Wrapper } from "./checkbox.styles";
import CheckMark from "../../assets/desktop/icon-check.svg";
interface IProps {
  label: string;
  isSelected: boolean;
  onCheckboxChange: any;
}

export const Checkbox: React.FC<IProps> = ({
  isSelected,
  label,
  onCheckboxChange,
}) => {
  return (
    <Wrapper isSelected={isSelected}>
      <input
        type="checkbox"
        className="label__input"
        onClick={onCheckboxChange}
      />
      <div className="label__square">
        <div className="label__checkbox">
          {isSelected && <img src={CheckMark} alt="checkmark" />}
        </div>
      </div>
      <span className="label__text">{label}</span>
    </Wrapper>
  );
};
