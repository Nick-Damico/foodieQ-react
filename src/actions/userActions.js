import axios from "axios";
import { SET_CURRENT_USER, TOGGLE_OVERLAY } from "./types";
// dispatch actions stored in actionHelpers to remove repeated code.
import { processResponse } from "./actionHelpers";

// Login To Api App, success should dispatch(SIGN_IN)
export const logInUser = user => {
  return async dispatch => {
    await axios
      .post("http://localhost:3001/api/v1/auth", { user: user })
      .then(response => {
        processResponse(dispatch, response);
        dispatch({type: TOGGLE_OVERLAY});
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
        dispatch({action: TOGGLE_OVERLAY})
      })
      .catch(error => {
        // Below the error messages coming from the Api Server is structured
        // as an object (key => value), below i'm concatinating the key and value
        // then storing them all into a single array and setting the response to have
        // an attribute of errors, this keeps it uniform to other responses and
        // requires the least amount of coding changes. The errors are set by
        // the Devise gem on the server side and in the future I may try to
        // move this code there.
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
