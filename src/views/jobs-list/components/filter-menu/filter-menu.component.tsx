import React from "react";

import { Wrapper, SearchInput } from "./filter-menu.styles";
import { Checkbox } from "../../../../shared-components";
import { useAppDispatch, useAppSelector } from "../../../../state";
import { SelectMenu } from "../select-menu";
import {
  toggleFullTime,
  setSearchQuery,
} from "../../../../state/features/filtered";
import { useWindowSize } from "../../../../lib/hooks";
function useFilterData(): [
  {
    searchQuery: string;
    fullTime: boolean;
    label: string;
    isMobile: boolean;
  },
  {
    handleSearch(e: React.ChangeEvent<HTMLInputElement>): void;
    handleFullTime(): void;
  }
] {
  const dispatch = useAppDispatch();

  const { fullTime, searchQuery } = useAppSelector((state) => ({
    fullTime: state.filter.fullTime,
    searchQuery: state.filter.searchQuery,
  }));
  const { width } = useWindowSize();
  const handlers = React.useMemo(
    () => ({
      handleFullTime: () => dispatch(toggleFullTime()),
      handleSearch: (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(setSearchQuery(e.target.value)),
    }),
    [dispatch]
  );
  const mobile = !!width && width <= 1024;

  const state = {
    fullTime,
    searchQuery,
    label: mobile ? "Full Time" : "Full Time Only",
    isMobile: mobile,
  };
  return [state, handlers];
}

export const FilterMenu = () => {
  const [
    { searchQuery, fullTime, label, isMobile },
    { handleSearch, handleFullTime },
  ] = useFilterData();
  return (
    <Wrapper>
      <SearchInput type="search" onChange={handleSearch} value={searchQuery} />
      <SelectMenu />
      <Checkbox
        label={label}
        isSelected={fullTime}
        onCheckboxChange={handleFullTime}
      />
    </Wrapper>
  );
};
