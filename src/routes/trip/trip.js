import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import Sidebar from './components/sidebar';

import {ActionCreators} from '../../redux/actionCreators';

import './trip.scss';

class Trip extends Component {

  static propTypes = {
    getTrip: PropTypes.func
  };

  constructor(props) {
    super(props);

    let tripId = this.props.params.id;
    this.props.getTrip(tripId);

    this.state = {
      map: null,
      icon: null
    }
  }

  componentDidMount() {
    var uluru = {lat: -25.363, lng: 131.044};

    this.state.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });

    this.state.icon = {
      path: google.maps.SymbolPath.CIRCLE,
      fillOpacity: 1.0,
      fillColor: "#017b55",
      strokeOpacity: 1.0,
      strokeColor: "#017b55",
      strokeWeight: 1.0,
      scale: 10.0
    };
  }

  render() {

    const {trip} = this.props;

    if (trip) {

      let icon = {
        path: google.maps.SymbolPath.CIRCLE,
        fillOpacity: 1.0,
        fillColor: "#017b55",
        strokeOpacity: 1.0,
        strokeColor: "#017b55",
        strokeWeight: 1.0,
        scale: 10.0
      };

      let markers = [];

      trip.geoPoints.forEach(point => {

        icon.fillColor = `rgb(${point.altitude}, ${point.altitude}, ${point.altitude})`;
        icon.strokeColor = icon.fillColor;

        let marker = new google.maps.Marker({
          position: {lat: point.latitude, lng:point.longitude},
          map: this.state.map,
          icon:icon
        });

        markers.push(marker);
      });

      let bounds = new google.maps.LatLngBounds();
      markers.forEach(m => {
        bounds.extend(m.getPosition());
      });

      this.state.map.fitBounds(bounds);
    }

    return (
      <div className="map-container">
        <div className="row h-100-p">
          <div className="map c-s-8" id="map"></div>
          <div className="sidebar-container c-s-4">
            <Sidebar></Sidebar>
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
