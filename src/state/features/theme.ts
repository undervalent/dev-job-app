import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface ThemeState {
  theme: "light" | "dark";
  deviceSize: "small" | "medium" | "large" | "extraLarge";
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
    setIsMobile: (state, action) => {
      state.deviceSize = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme, setLightTheme, setDarkTheme } = themeSlice.actions;

export const getTheme = (state: RootState) => state.theme.theme;
export const getDeviceSize = (state: RootState) => state.theme.deviceSize;
export const getUiValues = (state: RootState) => {
  const { deviceSize } = state.theme;
  const isMobile = deviceSize === "small";
  return {
    checkboxLabel: isMobile ? "Full Time" : "Full Time Only",
    searchPlaceholder: isMobile
      ? "Filter by title..."
      : "Filter by title, companies, expertise...",
    locationPlaceholder: "Filter by location...",
  };
};
