import {combineReducers} from 'redux';
import * as loginReducer from './login/reducer';

export default combineReducers(Object.assign(
  loginReducer,
));