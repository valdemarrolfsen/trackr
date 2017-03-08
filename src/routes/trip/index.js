import {guardRoute} from '../../lib/authGuard';

export default (store) => ({
  path : 'trips/:id/',

  onEnter: guardRoute,

  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const Trip = require('./trip').default;

      /*  Return getComponent   */
      cb(null, Trip);

      /* Webpack named bundle   */
    }, 'trip')
  }
})