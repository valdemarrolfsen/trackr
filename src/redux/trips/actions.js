import * as types from './types';
import Api from '../../lib/api';

export function listTrips() {
  return (dispatch, getState) => {
    return Api.get('/me/trips/').then(resp => {
      dispatch(setTrips({trips: resp.trips}));
    })
  }
}

export function getTrip(id) {
  return (dispatch, getState) => {
    return Api.get(`/trips/${id}`).then(resp => {
      dispatch(setSelectedTrip({trip:resp.trip}));
    })
  }
}

export function setTrips({trips}) {
  return {
    type: types.SET_TRIPS,
    trips
  }
}

export function setSelectedTrip({trip}) {
  return {
    type: types.SET_SELECTED_TRIP,
    trip
  }
}