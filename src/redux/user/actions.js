import * as types from './types';
import Api from '../../lib/api';

export function loginUser(username, password) {

  let data = {username:username, password:password};

  return (dispatch, getState) => {
    return Api.post('/login/', data).then(resp => {
      dispatch(setLoginSuccess({token: resp}));
    })
  }
}

export function setLoginSuccess({token}) {
  return {
    type: types.LOGIN_SUCCESS,
    token
  }
}