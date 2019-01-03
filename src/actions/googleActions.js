import axios from 'axios';
import { buildGoogleUser } from "./actionHelpers";
import {
  APP_SIGN_IN,
  APP_SIGN_OUT,
  SET_CURRENT_USER
} from "./types";

export const signIn = user => {
  return dispatch => {
    dispatch({ type: APP_SIGN_IN });
  };
};

export const signOut = () => {
  return { type: APP_SIGN_OUT };
};

export const logInGoogleUser = user => {
  const googleUser = buildGoogleUser(user)["data"]["user"];
  return async dispatch => {
    const response = await axios.post("http://localhost:3001/api/v1/auth/google", {
      user: { email: googleUser.email }
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      dispatch({ type: SET_CURRENT_USER, payload: response });
    }
  };
};
