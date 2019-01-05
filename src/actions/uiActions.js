import {
  TOGGLE_OVERLAY,
  TOGGLE_LOGIN_OVERLAY,
  TOGGLE_SIGNUP_OVERLAY
} from "./types";

export const toggleOverlay = () => {
  return { type: TOGGLE_OVERLAY };
};

export const toggleLogInOverlay = () => {
  return { type: TOGGLE_LOGIN_OVERLAY };
};

export const toggleSignUpOverlay = () => {
  return { type: TOGGLE_SIGNUP_OVERLAY };
};
