import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import Sidebar from '../components/sidenav/sidenav';

// Custom
import {ActionCreators} from '../redux/actionCreators';

import './coreLayout.scss';

class DashboardLayout extends Component {

  static propTypes = {
    children : PropTypes.element.isRequired
  };

  render() {
    return (
      <div className="h-100-p">
        <Sidebar />
        <div className="dashboard-container bg-stable-light w-100-p has-nav-side-lg">
          <div className="row p-2-2">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);