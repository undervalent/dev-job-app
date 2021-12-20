import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./features/theme";
import { jobListSlice } from "./features/job-list";
import { selectedInvoiceSlice } from "./features/selected-invoice";
export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    jobList: jobListSlice.reducer,
    selectedInvoice: selectedInvoiceSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
