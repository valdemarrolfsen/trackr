import createReducer from '../../lib/createReducer';
import * as types from './types';

export const taskCount = createReducer(0, {
    [types.SET_TASKS](state, action) {
        return action.tasks.length;
    }
});