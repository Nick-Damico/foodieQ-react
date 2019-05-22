import axios from 'axios';
import { buildGoogleUser } from "./actionHelpers";
import { apiUrl } from './api';
import {
  SIGN_IN
} from "./types";

export const googleSignIn = () => {
  return dispatch => {
    dispatch({ type: SIGN_IN });
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
      dispatch({ type: SIGN_IN, payload: googleUser });
    }
  };
};
