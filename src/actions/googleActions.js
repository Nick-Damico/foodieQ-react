import {
  APP_SIGN_IN,
  APP_SIGN_OUT,
  SET_CURRENT_USER
} from "./types";
import { buildGoogleUser } from "./actionHelpers";

export const signIn = user => {
  const response = buildGoogleUser(user);
  return dispatch => {
    dispatch({ type: APP_SIGN_IN });
    dispatch({
      type: SET_CURRENT_USER,
      payload: response
    });
  };
};

export const signOut = () => {
  return { type: APP_SIGN_OUT };
};
