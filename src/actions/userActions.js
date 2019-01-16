import axios from "axios";
import { APP_SIGN_IN, APP_SIGN_IN_ERROR, SET_CURRENT_USER } from "./types";
// dispatch actions stored in actionHelpers to remove repeated code.
import { processResponse } from "./actionHelpers";

// Login To Api App, success should dispatch(SIGN_IN)
export const logInUser = user => {
  return async dispatch => {
    const response = await axios
      .post("http://localhost:3001/api/v1/auth", { user: user })
      .catch(error => {
        dispatch({ type: APP_SIGN_IN_ERROR, payload: error.response.data });
      });
    if (response) {
      debugger;
      processResponse(dispatch, response);
    }
  };
};

export const signUpUser = user => {
  return async dispatch => {
    const response = await axios
      .post("http://localhost:3001/api/v1/signup", { user: user })
      .catch(error => {
        dispatch({ type: APP_SIGN_IN_ERROR, payload: error.response.data });
      });
    if (response) {
      processResponse(dispatch, response);
    }
  };
};

export const setCurrentUser = () => {
  return { type: SET_CURRENT_USER };
};
