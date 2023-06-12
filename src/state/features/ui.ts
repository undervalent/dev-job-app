import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface ThemeState {
  theme: "light" | "dark";
  deviceSize: "small" | "medium" | "large" | "huge";
}

const initialState: ThemeState = {
  theme: "light",
  deviceSize: "medium",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme === "light"
        ? (state.theme = "dark")
        : (state.theme = "light");
    },
    setLightTheme: (state) => {
      state.theme = "light";
    },
    setDarkTheme: (state) => {
      state.theme = "dark";
    },
    setDeviceSize: (state, action) => {
      state.deviceSize = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme, setLightTheme, setDarkTheme, setDeviceSize } =
  themeSlice.actions;

export const getTheme = (state: RootState) => state.ui.theme;
export const getDeviceSize = (state: RootState) => state.ui.deviceSize;
export const getUiValues = (state: RootState) => {
  const { deviceSize } = state.ui;
  const isLessThanMedium = deviceSize === "medium" || deviceSize === "small";
  return {
    checkboxLabel: isLessThanMedium ? "Full Time" : "Full Time Only",
    searchPlaceholder: isLessThanMedium
      ? "Filter by title..."
      : "Filter by title, companies, expertise...",
    locationPlaceholder: "Filter by location...",
  };
};
