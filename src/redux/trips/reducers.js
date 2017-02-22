import createReducer from '../../lib/createReducer';
import * as types from './types';

export const trips = createReducer([], {
    [types.SET_TRIPS](state, action) {
      return action.trips;
    }
});