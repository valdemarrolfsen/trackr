import createReducer from '../../lib/createReducer';
import * as types from './types';

export const isLoggedIn = createReducer(false, {
  [types.LOGIN_SUCCESS](state, action) {
    return state;
  }
});