import axios from "axios";
import { buildGoogleUser } from "./actionHelpers";
import { apiUrl } from "./api";
import { SIGN_IN } from "./types";

export const logInGoogleUser = user => {
  const googleUser = buildGoogleUser(user);
  return dispatch => {
    axios
      .post(`${apiUrl}/auth/google`, {
        user: { email: googleUser["data"]["user"]["email"] }
      })
      .then(response => {
        localStorage.setItem("foodieq-token", response.data.token);
        dispatch({ type: SIGN_IN, payload: googleUser });
      });
  };
};
