import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeAnchorTag: "home",
  toggleMenu: false,
  showContactForm: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setToggleMenu: (state, action) => {
      state.toggleMenu = action.payload;
    },
    setActiveAnchorTag: (state, action) => {
      state.activeAnchorTag = action.payload;
    },
    setShowContactForm: (state, action) => {
      state.showContactForm = action.payload;
    },
  },
});

export const { setToggleMenu, setActiveAnchorTag, setShowContactForm } =
  settingsSlice.actions;

export default settingsSlice.reducer;
