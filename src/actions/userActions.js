import axios from "axios";
import { SET_CURRENT_USER } from "./types";
// dispatch actions stored in actionHelpers to remove repeated code.
import { processResponse } from "./actionHelpers";

// Login To Api App, success should dispatch(SIGN_IN)
export const logInUser = user => {
  return async dispatch => {
    await axios
      .post("http://localhost:3001/api/v1/auth", { user: user })
      .then(response => {
        processResponse(dispatch, response);
      })
      .catch(error => {
        processResponse(dispatch, error.response);
      });
  };
};

export const signUpUser = user => {
  return async dispatch => {
    await axios
      .post("http://localhost:3001/api/v1/signup", { user: user })
      .then(response => {
        processResponse(dispatch, response);
      })
      .catch(error => {

        let errors = []
        for (let key in error.response.data) {
          error.response.data[key][0] = `${key} ${error.response.data[key]}`
          errors = [...errors, ...error.response.data[key]];
        }
        error.response.data.errors = errors;
        processResponse(dispatch, error.response);
      });
  };
};

export const setCurrentUser = () => {
  return { type: SET_CURRENT_USER };
};
