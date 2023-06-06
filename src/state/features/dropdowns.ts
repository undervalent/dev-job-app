import { createSlice } from "@reduxjs/toolkit";
import jobListData from "../../lib/data/data";
import { ISelectOption } from "../../lib/types";
import { generateSelectOptions } from "../utils";

export interface DropdownListState {
  locations: ISelectOption[];
  positions: ISelectOption[];
}

const initialState: DropdownListState = {
  locations: generateSelectOptions(jobListData, "location"),
  positions: generateSelectOptions(jobListData, "position"),
};

export const dropdownListSlice = createSlice({
  name: "dropdowns",
  initialState,
  reducers: {},
});

export default dropdownListSlice.reducer;
