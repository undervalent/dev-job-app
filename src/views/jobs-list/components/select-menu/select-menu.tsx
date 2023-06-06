import * as React from "react";
import Select from "react-select";

import { useSelectData } from "./hooks";

const customStyles = {
  control: (provided: any, state: any) => {
    return {
      ...provided,
      borderColor: "transparent",
      borderStyle: "none",
    };
  },
  menu: (provided: any, state: any) => {
    return {
      ...provided,
      border: "none",
      boxShadow: "none",
      borderStyle: "none",
    };
  },
  indicatorSeparator: (provided: any, state: any) => {
    return {
      ...provided,
      backgroundColor: "transparent",
    };
  },
};

export const SelectMenu = () => {
  const [{ locations }, { handleLocation }] = useSelectData();
  return (
    <Select
      isClearable
      options={locations}
      onChange={handleLocation}
      styles={customStyles}
      placeholder="Filter by location..."
    />
  );
};

export default SelectMenu;
