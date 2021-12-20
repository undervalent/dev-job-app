import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IJob } from "../../lib/types";

export interface SelectedInvoiceState {
  selectedInvoice: IJob | null;
}

const initialState: SelectedInvoiceState = {
  selectedInvoice: null,
};

export const selectedInvoiceSlice = createSlice({
  name: "selectedInvoice",
  initialState,
  reducers: {
    setSelectedInvoice: (state, action: PayloadAction<IJob>) => {
      state.selectedInvoice = action.payload;
    },
    resetSelectedInvoice: (state, action: PayloadAction<IJob>) => {
      state.selectedInvoice = null;
    },
  },
});

export default selectedInvoiceSlice.reducer;
