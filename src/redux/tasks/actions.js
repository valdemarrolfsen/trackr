import * as types from './types';
import Api from '../../lib/api';

export function listTasks() {
    return (dispatch, getState) => {
        return Api.get('/tasks/').then(resp => {
            dispatch(setTasks({tasks:resp}));
        })
    }
}

export function setTasks({tasks}) {
    return {
        type: types.SET_TASKS,
        tasks
    }
}