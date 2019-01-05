import {
  TOGGLE_OVERLAY,
  TOGGLE_LOGIN_OVERLAY,
  TOGGLE_SIGNUP_OVERLAY
} from "../actions/types";
const INITIAL_STATE = {
  overlay: {
    isOverlayOpen: false,
    showLogIn: false,
    showSignUp: false
  }
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_OVERLAY:
      return {
        ...state,
        overlay: {
          ...state.overlay,
          isOverlayOpen: !state.overlay.isOverlayOpen
        }
      };
    case TOGGLE_LOGIN_OVERLAY:
      return {
        ...state,
        overlay: { ...state.overlay, isOverlayOpen: true, showLogIn: true }
      };
    case TOGGLE_SIGNUP_OVERLAY:
      return {
        ...state,
        overlay: { ...state.overlay, isOverlayOpen: true, showSignUp: true }
      };
    default:
      return state;
  }
};

export default uiReducer;
