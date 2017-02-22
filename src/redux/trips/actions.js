import * as types from './types';
import Api from '../../lib/api';

export function listTrips() {
  return (dispatch, getState) => {
    return Api.get('/trips/').then(resp => {
      dispatch(setTrips({trips: resp}));
    })
  }
}

export function setTrips({trips}) {
  return {
    type: types.SET_TRIPS,
    trips
  }
}