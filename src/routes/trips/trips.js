import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import {ActionCreators} from '../../redux/actionCreators';

// Components
import Sidebar from './components/sidenav';
import Card from './components/card';

import './trips.scss';

class Trips extends Component {

  constructor(props) {
    super(props);

    this.props.listTrips();
  }

  render() {

    let trips = this.props.trips.map(trip => {
      return <Card key={trip._id} trip={trip} />;
    });

    return (
      <div className="h-100-p">
        <Sidebar />
        <div className="trip-container bg-stable-light w-100-p has-nav-side-lg">
          <div className="row p-2-2">
            {trips}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    trips: state.trips
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Trips);
