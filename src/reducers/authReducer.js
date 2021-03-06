import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_IN_ERROR,
  TOGGLE_OVERLAY,
  TOGGLE_LOGIN_OVERLAY,
  TOGGLE_SIGNUP_OVERLAY
} from "../actions/types";
const INITIAL_STATE = {
  isSignedIn: null,
  errors: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...INITIAL_STATE, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    case SIGN_IN_ERROR:
      return {
        ...state,
        errors: [...action.payload.data.errors]
      };
    case TOGGLE_OVERLAY:
    case TOGGLE_LOGIN_OVERLAY:
    case TOGGLE_SIGNUP_OVERLAY:
      return { ...state, errors: [] };
    default:
      return state;
  }
};
