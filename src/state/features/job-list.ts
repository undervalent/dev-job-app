import { createSlice } from "@reduxjs/toolkit";
import jobListData from "../../lib/data/data";
import { IJob } from "../../lib/types";

export interface JobListState {
  jobList: IJob[];
}

const initialState: JobListState = {
  jobList: jobListData,
};

export const jobListSlice = createSlice({
  name: "job-list",
  initialState,
  reducers: {},
});

export default jobListSlice.reducer;
