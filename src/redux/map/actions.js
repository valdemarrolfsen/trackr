import * as types from './types';

export function hoverMarker(index) {
  return (dispatch, getState) => {
    dispatch(setMarker({index: index}));
  }
}

export function setMarker({index}) {
  return {
    type: types.SET_MARKER,
    index
  }
}