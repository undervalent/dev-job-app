import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filterSlice } from "./filtered";
import { IJob } from "../../lib/types";

export interface FilteredInvoiceState {
  filteredItems: IJob[];
}

const initialState: FilteredInvoiceState = {
  filteredItems: [],
};

export const filteredInvoiceSlice = createSlice({
  name: "filtered-invoices",
  initialState,
  reducers: {},
  extraReducers: {
    [filterSlice.actions.toggleFullTime.type]: (state) => {
      
    },
  },
});

export default filteredInvoiceSlice.reducer;
