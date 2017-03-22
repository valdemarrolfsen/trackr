import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import {ActionCreators} from '../../../redux/actionCreators';

import TripChart from './chart';
import Button from '../../../components/button/button';

class Sidenav extends Component {


  render() {
    const {trip} = this.props;

    let report;

    return (
      <div className="sidebar color-light">
        <div className="h-100-p t-center">
          <h6 className="t-400 t-upper">Key heights</h6>
          <div className="row p-1-0">
            <div className="c-m-6">
              <p>Max height:</p>
              <p><span className="fs-15">{trip ? trip.tripReport.altitudeExtremas[1] : ''}</span>m</p>
            </div>

            <div className="c-m-6">
              <p>Min height:</p>
              <p><span className="fs-15">{trip ? trip.tripReport.altitudeExtremas[0] : ''}</span>m</p>
            </div>
          </div>

          <div className="row p-1-0 dividing-border">
            <div className="c-m-12">
              <h6 className="t-400 t-upper">Highets vertical speed</h6>
            </div>
          </div>

          <div className="row p-1-0 p-bottom">
            <div className="c-m-6">
              <p>Uppwards:</p>
              <p><span className="fs-15">{trip ? trip.tripReport.highestVerticalSpeed[0] : ''}</span>m</p>
            </div>

            <div className="c-m-6">
              <p>Downwards:</p>
              <p><span className="fs-15">{trip ? trip.tripReport.highestVerticalSpeed[1] : ''}</span>m</p>
            </div>
          </div>

          <div className="row p-1-0 dividing-border">
            <div className="c-m-12">
              <h6 className="t-400 t-upper">Total air time</h6>
            </div>
          </div>

          <div className="row row-center p-1-0 p-bottom">
            <div className="c-m-4">
              <p><span className="fs-15">2</span>hours</p>
            </div>
            <div className="c-m-4">
              <p><span className="fs-15">34</span>minutes</p>
            </div>
            <div className="c-m-4">
              <p><span className="fs-15">56</span>seconds</p>
            </div>
          </div>

          <div className="row p-1-0 dividing-border">
            <div className="c-m-12">
              <h6 className="t-400 t-upper">Other</h6>
            </div>
          </div>

          <div className="row p-1-0 p-bottom">
            <div className="c-m-6">
              <p>Distance traveled:</p>
              <p><span className="fs-15">{trip ? trip.tripReport.tripLength.toFixed(1) : ''}</span>m</p>
            </div>

            <div className="c-m-6">
              <p>Glide ratio:</p>
              <p><span className="fs-15">{trip ? trip.tripReport.glideRatio.toFixed(2) : ''}</span></p>
            </div>
          </div>

          <div className="row chart-container">
            <div className="c-m-12">
              <TripChart></TripChart>
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