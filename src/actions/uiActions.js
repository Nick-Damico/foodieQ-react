import {
  TOGGLE_OVERLAY,
  TOGGLE_LOGIN_OVERLAY,
  TOGGLE_SIGNUP_OVERLAY,
  TOGGLE_SIDE_PANEL
} from "./types";

export const toggleOverlay = () => {
  return { type: TOGGLE_OVERLAY };
};

export const toggleSidePanel = () => {
  return { type: TOGGLE_SIDE_PANEL };
};

export const toggleLogInOverlay = () => {
  return { type: TOGGLE_LOGIN_OVERLAY };
};

export const toggleSignUpOverlay = () => {
  return { type: TOGGLE_SIGNUP_OVERLAY };
};
