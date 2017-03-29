import * as TripActions from './trips/actions';
import * as UserActions from './user/actions';
import * as MapActions from './map/actions';

export const ActionCreators = Object.assign({},
  TripActions,
  UserActions,
  MapActions
);