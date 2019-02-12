import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import currentUserReducer from './currentUserReducer';
import uiReducer from './uiReducer';
import recipeReducer from './recipeReducer';

export default combineReducers({
  currentUser: currentUserReducer,
  auth: authReducer,
  form: formReducer,
  recipes: recipeReducer,
  ui: uiReducer,
});
