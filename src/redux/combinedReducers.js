import {combineReducers} from 'redux';
import * as loginReducer from './user/reducers';
import * as tripReducer from './trips/reducers';
import * as mapReducer from './map/reducers';

export default combineReducers(Object.assign(
  loginReducer,
  tripReducer,
  mapReducer
));