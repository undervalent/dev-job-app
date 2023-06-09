import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../state";
import {
  setSearchQuery,
  setLocationQuery,
  toggleFullTime,
  getIsFullTime,
  getSearchQuery,
  getLocationQuery,
} from "../../../../state/features/job-list";

import { useWindowSize } from "../../../../lib/hooks";

interface State {
  searchQuery: string;
  locationQuery: string;
  fullTime: boolean;
  label: string;
  isMobile: boolean;
}
interface Handlers {
  handleSearch(e: React.ChangeEvent<HTMLInputElement>): void;
  handleLocation(e: React.ChangeEvent<HTMLInputElement>): void;
  handleFullTime(): void;
}

export function useFilterData(): [State, Handlers] {
  const dispatch = useAppDispatch();
  const fullTime = useAppSelector(getIsFullTime);
  const searchQuery = useAppSelector(getSearchQuery);
  const locationQuery = useAppSelector(getLocationQuery);

  const { width } = useWindowSize();
  const handlers = React.useMemo(
    () => ({
      handleFullTime: () => dispatch(toggleFullTime()),
      handleSearch: (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(setSearchQuery(e.target.value)),
      handleLocation: (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(setLocationQuery(e.target.value)),
    }),
    [dispatch]
  );
  const mobile = !!width && width <= 1024;

  const state = {
    fullTime,
    searchQuery,
    label: mobile ? "Full Time" : "Full Time Only",
    isMobile: mobile,
    locationQuery,
  };
  return [state, handlers];
}
