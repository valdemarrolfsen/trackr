import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'

import './map.scss';

class Map extends Component {

  static propTypes = {
    trip:PropTypes.object,
    options: PropTypes.object
  };

  constructor(props) {
    super(props);

    console.log(props.options);

    this.state = {
      map: null,
      options: Object.assign({
        zoom: 4,
        streetViewControl: false,
        center: {lat: 0, lng: 0}
      }, props.options)
    };
  }

  componentDidMount() {

    const {trip} = this.props;

    this.state.map = new google.maps.Map(document.getElementById('map'), this.state.options);

    if (trip && trip.geoPoints && this.state.map) {
      this.addMarkers(trip);
    }
  }

  addMarkers(trip) {
    let icon = {
      path: google.maps.SymbolPath.CIRCLE,
      fillOpacity: 1.0,
      fillColor: "#017b55",
      strokeOpacity: 1.0,
      strokeColor: "#017b55",
      strokeWeight: 1.0,
      scale: 5.0
    };

    let markers = [];

    trip.geoPoints.forEach(point => {

      icon.fillColor = `rgb(255, ${point.altitude}, ${point.altitude})`;
      icon.strokeColor = icon.fillColor;

      let marker = new google.maps.Marker({
        position: {lat: point.latitude, lng: point.longitude},
        map: this.state.map,
        icon: icon
      });

      markers.push(marker);
    });

    let bounds = new google.maps.LatLngBounds();
    markers.forEach(m => {
      bounds.extend(m.getPosition());
    });

    this.state.map.fitBounds(bounds);
  }

  render() {

    const {trip} = this.props;

    if (trip && trip.geoPoints && this.state.map) {
      this.addMarkers(trip);
    }

    return (
      <div id="map"></div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Map);