import axios from "axios";
import { APP_SIGN_IN, APP_SIGN_IN_ERROR, SET_CURRENT_USER } from "./types";

// Login To Api App, success should dispatch(SIGN_IN)
export const logInUser = user => {
  return async dispatch => {
    const response = await axios
      .post("http://localhost:3001/api/v1/auth", {
        user: { email: user.email, password: user.password }
      })
      .catch(error => {
        dispatch({ type: APP_SIGN_IN_ERROR, payload: error.response.data });
      });
    if (response) {
      if (response.payload.status > 200) {
      } else if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        dispatch({ type: APP_SIGN_IN });
        dispatch({ type: SET_CURRENT_USER, payload: response });
      }
    }
  };
};

export const signInUser = user => {
  return async dispatch => {
    const response = await axios
      .post("http://localhost:3001/api/v1/signup", {
        user: {
          email: user.email,
          password: user.password,
          password_confirmation: user.password_confirmation
        }
      })
      .catch(error => {
        dispatch({ type: APP_SIGN_IN_ERROR, payload: error.response.data });
      });
    if (response) {
      if (response.payload.status > 200) {
      } else if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        dispatch({ type: APP_SIGN_IN });
        dispatch({ type: SET_CURRENT_USER, payload: response });
      }
    }
  };
};

export const setCurrentUser = () => {
  return { type: SET_CURRENT_USER };
};
