import { APP_SIGN_IN, APP_SIGN_OUT, APP_SIGN_IN_ERROR } from "../actions/types";
const INITIAL_STATE = {
  isSignedIn: null,
  errors: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_SIGN_IN:
      return { ...INITIAL_STATE, isSignedIn: true };
    case APP_SIGN_OUT:
      return { ...state, isSignedIn: false };
    case APP_SIGN_IN_ERROR:
      return {
        ...state,
        errors: [...state.errors, ...action.payload.data.errors]
      };
    default:
      return state;
  }
};
