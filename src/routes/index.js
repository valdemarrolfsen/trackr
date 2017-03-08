// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/coreLayout'
import Home from './home'
import Login from './login'
import Trips from './trips';
import Trip from './trip';

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    Login(store),
    Trips(store),
    Trip(store)
  ]
});

export default createRoutes