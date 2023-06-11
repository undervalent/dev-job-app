import React from "react";
import * as Styled from "./filter-menu.styles";
import { Button, Checkbox } from "../../../../shared-components";
import { MdLocationPin, MdSearch } from "react-icons/md";
import { useTheme } from "styled-components";

import { Input } from "../../../../shared-components/input";
import { useFilterData } from "./hooks";

export const FilterMenu = () => {
  const theme: any = useTheme();
  const [
    { searchQuery, fullTime, label, isMobile, locationQuery },
    { handleSearch, handleFullTime, handleLocation, handleFilter },
  ] = useFilterData();
  return (
    <Styled.Wrapper>
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
      <Styled.MenuWrapper>
        <Checkbox
          label={label}
          isSelected={fullTime}
          onCheckboxChange={handleFullTime}
        />
        <Styled.ButtonContainer>
          <Button purpose="primary" onClick={handleFilter} width={48}>
            Search
          </Button>
        </Styled.ButtonContainer>
      </Styled.MenuWrapper>
    </Styled.Wrapper>
  );
};
