import { selectedInvoiceSlice } from "./features/selected-invoice";
import { themeSlice } from "./features/theme";

export const availableActions = {
  theme: themeSlice.actions,
  selectedInvoice: selectedInvoiceSlice.actions,
};
