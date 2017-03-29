import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import {ActionCreators} from '../../redux/actionCreators';

import './statistics.scss';

class Statistics extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="row h-100-p bg-stable-light p-2-2">

        <div className="c-m-12 bg-light card p-1-2">
          <div className="row t-center">

            <div className="c-m-4">
              <p className="fs-15">Trips in total</p>
              <p className="fs-15"><span className="fs-20 t-600">4</span></p>
            </div>

            <div className="c-m-4">
              <p className="fs-15">Total distance traveled</p>
              <p className="fs-15"><span className="fs-20 t-600">450</span>m</p>
            </div>

            <div className="c-m-4">
              <p className="fs-15">Max speed</p>
              <p className="fs-15"><span className="fs-20 t-600">31</span>km/h</p>
            </div>

          </div>
        </div>



      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
