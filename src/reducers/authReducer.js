import { APP_SIGN_IN, APP_SIGN_OUT } from "../actions/types";
const INITIAL_STATE = {
  isSignedIn: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_SIGN_IN:
      return { ...state, isSignedIn: true };
    case APP_SIGN_OUT:
      return { ...state, isSignedIn: false };    
    default:
      return state;
  }
};
