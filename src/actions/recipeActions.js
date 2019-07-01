import {
  CREATE_RECIPE,
  SET_SELECTED_RECIPE,
  ALL_RECIPES
} from "./types";
import {
  apiUrl
} from "./api";
import axios from "axios";

const authHeader = token => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

export const createRecipe = (user, formValues) => async dispatch => {
  // get currentUser id
  const foodieqToken = localStorage.getItem("foodieq-token");
  // Prep Image File for upload
  const response = await axios
    .post(
      `${apiUrl}/users/${user.id}/recipes`,
      formValues,
      authHeader(foodieqToken)
    )
    .then(res => {
      let fd = new FormData();
      fd.append("recipe[image]", formValues.recipe.image);
      axios
        .patch(
          `${apiUrl}/users/${user.id}/recipes/${res.data.data.id}`,
          fd,
          authHeader(foodieqToken)
        )
        .then(res => {
          dispatch({
            type: SET_SELECTED_RECIPE,
            payload: res.data
          });
        });
    });
};


export const allRecipes = () => async dispatch => {
  const foodieqToken = localStorage.getItem("foodieqToken")
  const response = await axios
    .get(
      `${apiUrl}/recipes`,
      authHeader(foodieqToken)
    )
    .then(res => {
      dispatch({
        type: ALL_RECIPES,
        payload: res.data
      })
    });
};
