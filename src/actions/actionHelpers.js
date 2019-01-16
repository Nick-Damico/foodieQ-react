import { APP_SIGN_IN, APP_SIGN_IN_ERROR, SET_CURRENT_USER } from "./types";

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
  localStorage.setItem("token", response.data.token);
  dispatch({ type: APP_SIGN_IN });
  dispatch({ type: SET_CURRENT_USER, payload: response });
}

export const processResponse = (dispatch, response) => {
  if (response.status >= 200 && response.status < 300) {
    successfulResponse(dispatch, response);
  }
}
