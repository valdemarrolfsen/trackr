import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

// Custom
import {ActionCreators} from '../../redux/actionCreators';
import Button from '../../components/button/button';

// Resources
import bg from '../../resources/img/bg2.jpg';

import './register.scss';

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  doRegister(e) {

    // Needs to prevent default behaviour
    e.preventDefault();

    return this.props.registerUser(this.state.username, this.state.password).then(() => {
      browserHistory.push('/login/');
    });
  }

  render() {
    return (
      <div className="login-container bg-image cover-dark cover-7 row row-center row-center-v"
           style={{'backgroundImage': `url(${bg})`}}>

        <form className="cover-content w-400" onSubmit={(e) => {this.doRegister(e)}}>

          <div className="p-2-0">
            <div className="material-input">

              <input type="text"
                     name="username"
                     id="username"
                     value = {this.state.username}
                     onChange = {(e) => {this.setState({username: e.target.value})}}
                     required />

              <label htmlFor="username">Username</label>
              <span/>
            </div>
          </div>

          <div className="p-2-0">
            <div className="material-input">

              <input type="password"
                     name="password"
                     id="password"
                     value = {this.state.password}
                     onChange = {(e) => {this.setState({password: e.target.value})}}
                     required />

              <label htmlFor="password">Password</label>
              <span/>
            </div>
          </div>

          <div className="p-2-0">
            <Button classNames={'btn-lg btn-border-light w-100-p rounded-3 fs-12'}
                    loading={false}
                    type={'submit'}
                    rightIcon={'pencil'}
                    text={'Register user'} />
          </div>

        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
