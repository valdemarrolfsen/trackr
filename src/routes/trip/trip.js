import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import Sidebar from './components/sidebar';
import Map from '../../components/map/map';

import {ActionCreators} from '../../redux/actionCreators';

import './trip.scss';

class Trip extends Component {

  static propTypes = {
    getTrip: PropTypes.func,
    setSelectedTrip: PropTypes.func
  };

  constructor(props) {
    super(props);

    let tripId = this.props.params.id;
    this.props.getTrip(tripId);
  }

  componentWillUnmount() {
    this.props.setSelectedTrip({trip: null});
  }

  render() {

    const {trip} = this.props;

    return (
      <div className="map-container">
        <div className="row h-100-p">
          <div className="c-s-8 h-100-p">
            <Map trip={trip} />
          </div>
          <div className="sidebar-container c-s-4">
            <Sidebar/>
          </div>
        </div>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
