import { GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT, SET_CURRENT_USER } from "./types";
import { buildUser } from './actionHelpers';

export const signIn = user => {
  const response = buildUser(user);
  return dispatch => {
    dispatch({ type: GOOGLE_SIGN_IN });
    dispatch({
      type: SET_CURRENT_USER,
      payload: response
    });
  };
};

export const signOut = () => {
  return {
    type: GOOGLE_SIGN_OUT
  };
};
