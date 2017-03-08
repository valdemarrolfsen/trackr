import {combineReducers} from 'redux';
import * as loginReducer from './user/reducers';
import * as tripReducer from './trips/reducers';

export default combineReducers(Object.assign(
    loginReducer,
    tripReducer
));