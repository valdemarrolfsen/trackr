import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router';

class Card extends Component {

  static propTypes = {
    trip: PropTypes.object
  };

  render() {

    const { trip } = this.props;

    let date = new Date(trip.startTimestamp);

    return (
      <Link to={`/trips/${trip._id}/`} className="card bg-light hover-light m-1-1 p-1-1">
        <div className="h-200 w-300 bg-primary"></div>
        <div className="p-1-0 p-top">
          <h5>{trip.name}</h5>
          <p className="color-stable-dark">{date.toDateString()}</p>
        </div>
      </Link>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Card);