import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  extraReducers: {},
});

export default filteredInvoiceSlice.reducer;
