import React, {Component, PropTypes} from 'react';
import {browserHistory, Router} from 'react-router';
import {createStore, applyMiddleware, compose, bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';

import {ActionCreators} from './redux/actionCreators';

class Main extends Component {

  static propTypes = {
    routes: PropTypes.object
  };

  render() {

    return (
        <Router history={browserHistory} children={this.props.routes} />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
  return {}
}, mapDispatchToProps)(Main)
