import React, {Component} from 'react';
import {connect} from 'react-redux'

class Login extends Component {
  render() {
    return (
      <h1>Hello World!!!!!!</h1>
    )
  }

}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Login);