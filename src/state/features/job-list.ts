import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";
import jobListData from "../../lib/data/data";
import { IJob } from "../../lib/types";
import { RootState } from "../store";

const jobsAdapter = createEntityAdapter<IJob>({
  // Assume IDs are stored in a field other than `job.id`
  // selectId: (job) => job.id,
  // Keep the "all IDs" array sorted based on book titles
  sortComparer: (a, b) => a.location.localeCompare(b.location),
});

const emptyInitialState = jobsAdapter.getInitialState();
const initialState = jobsAdapter.upsertMany(emptyInitialState, jobListData);

export interface JobListState {
  entities: IJob;
  ids: number[];
  fullTime: boolean;
  searchQuery: string;
  locationQuery: string;
}

// const initialState: any = {
//   jobList: filledState,
// };

export const jobListSlice = createSlice({
  name: "jobList",
  initialState: {
    ...initialState,
    fullTime: false,
    searchQuery: "",
    location: [],
    locationQuery: "",
  },
  reducers: {
    toggleFullTime: (state) => {
      state.fullTime = !state.fullTime;
    },
    setSearchQuery: (state, { payload }: PayloadAction<string>) => {
      state.searchQuery = payload;
    },
    setLocationQuery: (state, { payload }: PayloadAction<string>) => {
      state.locationQuery = payload;
    },
  },
});

export const getIsFullTime = (state: RootState) => state.jobList.fullTime;
export const getSearchQuery = (state: RootState) => state.jobList.searchQuery;
export const getLocationQuery = (state: RootState) =>
  state.jobList.locationQuery;

export const getFilteredJobList = (state: RootState) => {
  const { ids, entities, fullTime, searchQuery, locationQuery } = state.jobList;

  let filteredIds = [...ids];

  if (entities === undefined) return [];

  if (fullTime) {
    filteredIds = filteredIds.filter(
      (el) => entities?.[el]?.contract === "Full Time"
    );
  }
  if (locationQuery.length) {
    filteredIds = filteredIds.filter((el) =>
      entities?.[el]?.location
        .toLowerCase()
        .includes(locationQuery.toLowerCase())
    );
  }
  if (searchQuery.length) {
    filteredIds = filteredIds.filter((el) => {
      const query = searchQuery.toLowerCase();
      return (
        entities?.[el]?.position.toLowerCase().includes(query) ||
        entities?.[el]?.description.toLowerCase().includes(query) ||
        entities?.[el]?.company.toLowerCase().includes(query)
      );
    });
  }

  return filteredIds.map((jobId) => entities[jobId]);
};
export const getEntities = (state: RootState) => state.jobList.entities;
export const { toggleFullTime, setSearchQuery, setLocationQuery } =
  jobListSlice.actions;

export default jobListSlice.reducer;
