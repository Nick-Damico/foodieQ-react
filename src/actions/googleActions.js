import axios from 'axios';
import { buildGoogleUser } from "./actionHelpers";
import { apiUrl } from './api';
import {
  APP_SIGN_IN,
  SET_CURRENT_USER,
  TOGGLE_OVERLAY_OFF
} from "./types";

export const googleSignIn = () => {
  return dispatch => {
    dispatch({ type: APP_SIGN_IN });
  };
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
      dispatch({ type: TOGGLE_OVERLAY_OFF });
    }
  };
};
