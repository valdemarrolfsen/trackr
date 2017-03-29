import createReducer from '../../lib/createReducer';
import * as types from './types';

export const selectedMarkerIndex = createReducer(null, {
    [types.SET_MARKER](state, action) {
      return action.index;
    }
});