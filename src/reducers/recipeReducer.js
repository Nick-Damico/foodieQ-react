import { CREATE_RECIPE } from "../actions/types";
const INITIAL_STATE = {
  recipes: [],
  selectedRecipe: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_RECIPE:
      break;
    default:
      return state;
  }
};
