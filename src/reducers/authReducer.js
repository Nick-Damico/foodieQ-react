import { GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT, APP_SIGN_IN } from "../actions/types";
const INITIAL_STATE = {
  isSignedIn: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOOGLE_SIGN_IN:
      return { ...state, isSignedIn: true };
    case GOOGLE_SIGN_OUT:
      return { ...state, isSignedIn: false };
    case APP_SIGN_IN:
      return { ...state, isSignedIn: true };
    default:
      return state;
  }
};
