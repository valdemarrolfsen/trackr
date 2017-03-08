
import Chart from 'chart.js';

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../../../redux/actionCreators';

class TripChart extends Component {

  componentDidMount() {
  }

  render() {
    const { trip } = this.props;

    if (trip) {
      console.log(trip);

      var data = trip.geoPoints.map((point, index) => {
        return {
          x: index,
          y: point.altitude
        };
      });

      console.log(data);

      var ctx = document.getElementById("tripChart");
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          datasets: [{
            label: 'Simo data',
            data: data
          }]
        },
        options: {
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom'
            }]
          }
        }
      });
    }

    return (
      <div>
        <canvas id="tripChart" width="50" height="50"></canvas>
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

export default connect(mapStateToProps, mapDispatchToProps)(TripChart);