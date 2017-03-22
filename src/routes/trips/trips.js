import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import {ActionCreators} from '../../redux/actionCreators';

// Components
import Card from '../../components/card/card';

import './trips.scss';

class Trips extends Component {

  static propTypes = {
    listTrips: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.props.listTrips();
  }

  render() {

    let trips = this.props.trips.map((trip, i) => {
      return <Card key={trip._id} index={i} trip={trip} />;
    });

    return (
      <div className="h-100-p">
        <div className="bg-stable-light w-100-p">
          <div className="row">
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
