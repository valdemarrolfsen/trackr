import * as TripActions from './trips/actions';
import * as UserActions from './user/actions';

export const ActionCreators = Object.assign({},
  TripActions,
  UserActions
);