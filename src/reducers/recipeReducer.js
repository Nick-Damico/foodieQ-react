import { CREATE_RECIPE, SET_SELECTED_RECIPE } from "../actions/types";
const INITIAL_STATE = {
  recipes: [],
  selectedRecipe: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SELECTED_RECIPE:
      return {...state, selectedRecipe: action.payload.data}
      break;
    default:
      return state;
  }
};
