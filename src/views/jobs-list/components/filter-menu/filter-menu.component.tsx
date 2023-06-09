import React from "react";
import { Wrapper } from "./filter-menu.styles";
import { Checkbox } from "../../../../shared-components";
import { MdLocationPin, MdSearch } from "react-icons/md";
import { useTheme } from "styled-components";

import { Input } from "../../../../shared-components/input";
import { useFilterData } from "./hooks";

export const FilterMenu = () => {
  const theme: any = useTheme();
  const [
    { searchQuery, fullTime, label, isMobile, locationQuery },
    { handleSearch, handleFullTime, handleLocation },
  ] = useFilterData();
  return (
    <Wrapper>
      <Input
        icon={<MdSearch size="30px" color={theme?.colors?.violet} />}
        type="search"
        onChange={handleSearch}
        value={searchQuery}
        placeholder="Filter by title, companies, expertise..."
      />
      <Input
        type="text"
        onChange={handleLocation}
        value={locationQuery}
        icon={<MdLocationPin size="30px" color={theme?.colors?.violet} />}
        placeholder="Filter by location..."
      />
      <Checkbox
        label={label}
        isSelected={fullTime}
        onCheckboxChange={handleFullTime}
      />
    </Wrapper>
  );
};
