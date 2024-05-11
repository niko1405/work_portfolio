import {
  setActiveAnchorTag,
  setShowContactForm,
  setToggleMenu,
} from "./settingsSlice";

export const setActiveAnchorTagAction = (anchorTag) => (dispatch) => {
  dispatch(setActiveAnchorTag(anchorTag));
};

export const setToggleMenuAction = (toggleMenu) => (dispatch) => {
  dispatch(setToggleMenu(toggleMenu));
};

export const setShowContactFormAction = (showContacForm) => (dispatch) => {
  dispatch(setShowContactForm(showContacForm));
};
