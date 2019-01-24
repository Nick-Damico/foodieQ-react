import {
  TOGGLE_OVERLAY,
  TOGGLE_LOGIN_OVERLAY,
  TOGGLE_SIGNUP_OVERLAY,
  TOGGLE_SIDE_PANEL
} from "../actions/types";
const INITIAL_STATE = {
  overlay: {
    isOverlayOpen: false,
    showLogIn: false,
    showSignUp: false
  },
  sidePanel: {
    isOpen: false
  }
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_OVERLAY:
      return {
        ...state,
        overlay: {
          ...INITIAL_STATE.overlay,
          isOverlayOpen: !state.overlay.isOverlayOpen
        }
      };
    case TOGGLE_LOGIN_OVERLAY:
      return {
        ...state,
        overlay: { isOverlayOpen: true, showLogIn: true, showSignUp: false }
      };
    case TOGGLE_SIGNUP_OVERLAY:
      return {
        ...state,
        overlay: {
          ...state.overlay,
          isOverlayOpen: true,
          showSignUp: true,
          showLogIn: false
        }
      };
      case TOGGLE_SIDE_PANEL:
        return {
          ...state,
          sidePanel: { isOpen: !state.sidePanel.isOpen }
        }
    default:
      return state;
  }
};

export default uiReducer;
