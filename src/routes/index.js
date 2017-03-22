// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/coreLayout'
import DashboardLayout from '../layouts/dashboardLayout';
import Home from './home'
import Login from './login'
import Register from './register';
import Trips from './trips';
import Trip from './trip';
import Statistics from './statistics';

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    Login(store),
    Trip(store),
    Register(store),
    {
      path: 'trips/',
      component:DashboardLayout,
      indexRoute: Trips(store),
      childRoutes: [
        Statistics(store)
      ]
    }
  ]
});

export default createRoutes