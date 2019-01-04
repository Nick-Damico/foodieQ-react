import { TOGGLE_OVERLAY } from "../actions/types";
const INITIAL_STATE = {
  isOverlayOpen: false
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_OVERLAY:
      return { ...state, isOverlayOpen: !state.isOverlayOpen };
    default:
      return state;
  }
};

export default uiReducer;
