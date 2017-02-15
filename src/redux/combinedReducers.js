import {combineReducers} from 'redux';
import * as loginReducer from './login/reducer';
import * as taskReducer from './tasks/reducers';

export default combineReducers(Object.assign(
    loginReducer,
    taskReducer
));