import axios from 'axios';
import { buildGoogleUser } from "./actionHelpers";
import {
  APP_SIGN_IN,
  APP_SIGN_OUT,
  SET_CURRENT_USER,
  TOGGLE_OVERLAY
} from "./types";
const apiUrl = 'https://foodieq-api.herokuapp.com/';

export const googleSignIn = user => {
  return dispatch => {
    dispatch({ type: APP_SIGN_IN });
  };
};

export const googleSignOut = () => {
  return { type: APP_SIGN_OUT };
};

export const logInGoogleUser = user => {
  const googleUser = buildGoogleUser(user);
  return async dispatch => {
    const response = await axios.post(`${apiUrl}/auth/google`, {
      user: { email: googleUser["data"]["user"]["email"] }
    });
    if (response.status === 200) {
      localStorage.setItem("foodieq-token", response.data.token);
      dispatch({ type: SET_CURRENT_USER, payload: googleUser });
      dispatch({ type: TOGGLE_OVERLAY });
    }
  };
};
