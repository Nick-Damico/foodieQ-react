import axios from "axios";
import { APP_SIGN_IN, SET_CURRENT_USER } from "./types";

// Login To Api App, success should dispatch(SIGN_IN)
export const logInUser = user => {
  return async dispatch => {
    const response = await axios.post("http://localhost:3001/api/v1/auth", {
      user: { email: user.email, password: user.password }
    });

    dispatch({ type: APP_SIGN_IN, payload: response });
    dispatch({ type: SET_CURRENT_USER, payload: response });
  };
};

export const setCurrentUser = () => {
  return {
    type: SET_CURRENT_USER
  };
};
