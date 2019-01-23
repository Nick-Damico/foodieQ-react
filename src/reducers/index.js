import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import currentUserReducer from './currentUserReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  currentUser: currentUserReducer,
  auth: authReducer,
  ui: uiReducer,
  form: formReducer
});
