
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
            label: 'Height each second',
            data: data,
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 10,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 0,
            pointHitRadius: 10,
            spanGaps: false,
          }]
        },
        options: {
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom'
            }]
          },
          tooltips: {
            mode: 'index',
            intersect: false
          },
          hover: {
            mode: 'index',
            intersect: false,
            onHover: (e, el) => {
              if (el.length)
                this.props.hoverMarker(el[0]._index);
            }
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