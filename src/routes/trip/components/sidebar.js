import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import {ActionCreators} from '../../../redux/actionCreators';

class Sidenav extends Component {


  render() {
    const {trip} = this.props;

    return (
      <div className="sidebar color-light">
        <div className="t-center">
          <h4 className="t-300 t-upper">Key points</h4>
          <div className="row p-2-0">
            <div className="c-m-4">
              <p>Max height:</p>
              <p><span className="fs-30">534</span>m</p>
            </div>

            <div className="c-m-4">
              <p>Avg. height:</p>
              <p><span className="fs-30">378</span>m</p>
            </div>

            <div className="c-m-4">
              <p>Min height:</p>
              <p><span className="fs-30">245</span>m</p>
            </div>
          </div>
        </div>
      </div>
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