import { SET_CURRENT_USER } from "../actions/types";
const INITIAL_STATE = {
  id: null,
  email: null,
  token: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        id: action.payload.data.user.id,
        email: action.payload.data.user.email,
        token: action.payload.data.token
      };
    default:
      return state;
  }
};
