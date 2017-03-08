import * as types from './types';
import Api from '../../lib/api';

export function loginUser(username, password) {

  let data = {username:username, password:password};

  return (dispatch, getState) => {
    return Api.post('/login/', data)
      .then(resp => {
        localStorage.setItem('token', resp.token);
        localStorage.setItem('refresh', resp.refreshToken);
      })
      .then(resp => {
      dispatch(setAuthSuccess({isAuthenticated: true}));
    })
  }
}

export function refreshToken() {
  return (dispatch, getState) => {
    return Api.post('/login/refresh/', {refreshToken:localStorage.getItem('refresh')})
      .then(resp => {
        localStorage.setItem('token', resp.token);
      })
      .then(resp => {
        dispatch(setAuthSuccess({isAuthenticated: true}));
      });
  }
}

export function setAuthSuccess({isAuthenticated}) {
  return {
    type: types.AUTH_SUCCESS,
    isAuthenticated
  }
}