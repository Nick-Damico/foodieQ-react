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
        overlay: {
          ...INITIAL_STATE.overlay,
          isOverlayOpen: !state.overlay.isOverlayOpen
        }
      };
    case TOGGLE_LOGIN_OVERLAY:
      return {
        overlay: { isOverlayOpen: true, showLogIn: true, showSignUp: false }
      };
    case TOGGLE_SIGNUP_OVERLAY:
      return {
        overlay: {
          ...state.overlay,
          isOverlayOpen: true,
          showSignUp: true,
          showLogIn: false
        }
      };
    default:
      return state;
  }
};

export default uiReducer;
