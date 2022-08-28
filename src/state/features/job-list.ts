import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import jobListData from "../../lib/data/data";
import { IJob } from "../../lib/types";

const jobsAdapter = createEntityAdapter<IJob>({
  // Assume IDs are stored in a field other than `job.id`
  // selectId: (job) => job.id,
  // Keep the "all IDs" array sorted based on book titles
  sortComparer: (a, b) => a.location.localeCompare(b.location),
});

const emptyInitialState = jobsAdapter.getInitialState();
const filledState = jobsAdapter.upsertMany(emptyInitialState, jobListData);

export interface JobListState {
  entities: IJob[];
  ids: number;
}

const initialState: any = {
  jobList: filledState,
};

export const jobListSlice = createSlice({
  name: "job-list",
  initialState,
  reducers: {},
});

export default jobListSlice.reducer;
