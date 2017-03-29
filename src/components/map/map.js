import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'

import './map.scss';

class Map extends Component {

  static propTypes = {
    trip:PropTypes.object,
    options: PropTypes.object,
    index: PropTypes.number
  };

  constructor(props) {
    super(props);

    this.state = {
      map: null,
      marker: null,
      options: Object.assign({
        zoom: 4,
        streetViewControl: false,
        center: {lat: 0, lng: 0}
      }, props.options)
    };
  }

  componentDidMount() {

    const {trip, index} = this.props;

    this.state.map = new google.maps.Map(document.getElementById(`map${index}`), this.state.options);

    if (trip && trip.geoPoints && this.state.map) {
      this.addMarkers(trip);
    }
  }

  addMarkers(trip) {
    let points = [];

    trip.geoPoints.forEach(point => {
      points.push({lat: point.latitude, lng: point.longitude});
    });

    let bounds = new google.maps.LatLngBounds();
    points.forEach(p => {
      bounds.extend(p);
    });

    this.state.map.fitBounds(bounds);

    let flightPath = new google.maps.Polyline({
      path: points,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath.setMap(this.state.map);
  }

  render() {

    let icon = {
      path: google.maps.SymbolPath.CIRCLE,
      fillOpacity: 1.0,
      fillColor: "#4e8fff",
      strokeOpacity: 1.0,
      strokeColor: "#ffffff",
      shadow: '#000000',
      strokeWeight: 2.5,
      scale: 8.0
    };

    const {trip, index, markerIndex} = this.props;

    if (markerIndex) {
      let point = trip.geoPoints[markerIndex];

      if (this.state.marker) {
        let pos = new google.maps.LatLng(point.latitude, point.longitude);
        this.state.marker.setPosition(pos);
      } else {
        this.state.marker = new google.maps.Marker({
          position: {lat: point.latitude, lng: point.longitude},
          map: this.state.map,
          icon: icon
        });
      }
    }

    if (trip && trip.geoPoints && this.state.map) {
      this.addMarkers(trip);
    }

    return (
      <div className="map" id={`map${index}`}></div>
    );
  }
}

function mapStateToProps(state) {
  return {
    markerIndex: state.selectedMarkerIndex
  }
}

export default connect(mapStateToProps)(Map);