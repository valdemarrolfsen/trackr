import createReducer from '../../lib/createReducer';
import * as types from './types';

export const trips = createReducer([], {
    [types.SET_TRIPS](state, action) {
      return action.trips;
    }
});

export const selectedTrip = createReducer(null, {
  [types.SET_SELECTED_TRIP](state, action) {
    return action.trip;
  }
});