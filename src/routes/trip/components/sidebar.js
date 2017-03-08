import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import {ActionCreators} from '../../redux/actionCreators';

class Sidenav extends Component {


  render() {
    const {trip} = this.props;

    return (
      <div></div>
    )
  }
}

function mapStateToProps(state) {
  return {
    trip: state.selectedTrip
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidenav);