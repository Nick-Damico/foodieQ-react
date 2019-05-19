import { SIGN_IN, APP_SIGN_IN_ERROR, SET_CURRENT_USER } from "./types";

export const buildGoogleUser = user => {
  let profile = user.getBasicProfile();
  return {
    data: {
      user: {
        id: profile.getId(),
        email: profile.getEmail(),
        imageUrl: profile.getImageUrl(),
        name: profile.getName()
      }
    }
  };
};

export const successfulResponse = (dispatch, response) => {
  if (response.data.token) {
    localStorage.setItem("foodieq-token", response.data.token);
  }
  dispatch({ type: SIGN_IN });
  dispatch({ type: SET_CURRENT_USER, payload: response });
};

export const errorResponse = (dispatch, response) => {
  dispatch({ type: APP_SIGN_IN_ERROR, payload: response });
};

export const processResponse = (dispatch, response) => {
  let status = response.status;

  if (status >= 200 && status < 300) {
    successfulResponse(dispatch, response);
  } else if (status >= 400 && status < 500) {
    errorResponse(dispatch, response);
  }
};
