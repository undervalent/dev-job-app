import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../state";
import { setLocation } from "../../../../../state/features/filtered";

export function useSelectData(): [
  state: { locations: any[] },
  handlers: {
    handleLocation(option: any): void;
  }
] {
  const dispatch = useAppDispatch();
  const { locations } = useAppSelector((state) => ({
    locations: state.dropdowns.locations,
  }));

  const handlers = React.useMemo(
    () => ({
      handleLocation: (option: any) => {
        const value = option?.value ? [option.value] : [];
        dispatch(setLocation(value));
      },
    }),
    [dispatch]
  );

  const state = { locations };
  return [state, handlers];
}
