
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

      let data = trip.geoPoints.map((point, index) => {
        return {
          x: index,
          y: point.altitude
        };
      });

      let ctx = document.getElementById("tripChart");
      let myChart = new Chart(ctx, {
        type: 'line',
        data: {
          datasets: [{
            label: 'Simo data',
            data: data,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderColor: 'rgba(255, 255, 255, 0.3)'
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
        <canvas id="tripChart"></canvas>
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