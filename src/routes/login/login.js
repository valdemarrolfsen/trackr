import React, {Component} from 'react';
import {connect} from 'react-redux'

class Login extends Component {
  render() {
    return (
      <button onClick={this.props.listTasks()} >click me</button>
    )
  }

}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Login);
