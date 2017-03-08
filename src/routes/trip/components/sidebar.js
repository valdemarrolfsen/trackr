import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import {ActionCreators} from '../../../redux/actionCreators';

import TripChart from './chart';
import Button from '../../../components/button/button';

class Sidenav extends Component {


  render() {
    const {trip} = this.props;

    return (
      <div className="sidebar color-light">
        <div className="h-100-p t-center">
          <h6 className="t-400 t-upper">Key heights</h6>
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

          <div className="row p-2-0 dividing-border">
            <div className="c-m-12">
              <h6 className="t-400 t-upper">Total air time</h6>
            </div>
          </div>

          <div className="row row-center">
            <div className="c-m-4">
              <p><span className="fs-30">2</span>hours</p>
            </div>
            <div className="c-m-4">
              <p><span className="fs-30">34</span>minutes</p>
            </div>
            <div className="c-m-4">
              <p><span className="fs-30">56</span>seconds</p>
            </div>
          </div>

          <div className="row row-center p-2-0">
            <div className="c-m-6 p-0-1 p-right">
              <Button classNames={'btn-sm btn-border-stable rounded-3 w-100-p h-40'}
                      loading={false}
                      rightIcon="pencil"
                      text={'Edit info'} />
            </div>
            <div className="c-m-6 p-0-1 p-left">
              <Button classNames={'btn-sm btn-border-stable rounded-3 w-100-p h-40'}
                      loading={false}
                      rightIcon="star-o"
                      text={'Set as favourite'} />
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