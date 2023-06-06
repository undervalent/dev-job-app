import React from "react";
import { Wrapper, Checkbox as StyledCheckbox } from "./checkbox.styles";
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
    <Wrapper isSelected={isSelected} htmlFor={label}>
      <StyledCheckbox type="checkbox" onClick={onCheckboxChange} id={label} />
      <div className="label__square">
        <div className="label__checkbox">
          {isSelected && <img src={CheckMark} alt="checkmark" />}
        </div>
      </div>
      <span className="label__text">{label}</span>
    </Wrapper>
  );
};
