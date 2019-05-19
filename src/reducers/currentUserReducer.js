import { SIGN_IN, SIGN_OUT } from "../actions/types";
const INITIAL_STATE = {
  id: null,
  email: null,
  imageUrl: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        id: action.payload.data.user.id,
        email: action.payload.data.user.email,
        imageUrl: action.payload.data.user.imageUrl
      };
    case SIGN_OUT:
      return INITIAL_STATE
    default:
      return state;
  }
};
