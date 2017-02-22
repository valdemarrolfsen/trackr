import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

// Custom
import {ActionCreators} from '../../redux/actionCreators';
import Button from '../../components/button/button';

// Resources
import logo from '../../resources/img/simple-logo.png';
import bg from '../../resources/img/bg2.jpg';

import './login.scss';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: String,
      password: String
    }
  }

  doLogin(e) {

    console.log(e);

    // Needs to prevent default behaviour
    e.preventDefault();

    return this.props.loginUser(this.state.username, this.state.password).then(() => {
      console.log('Finished');
    });
  }

  bindValue(obj, e) {
    this.setState({obj: e.target.value});
  }

  render() {
    return (
      <div className="login-container bg-image cover-dark cover-7 row row-center row-center-v"
           style={{'backgroundImage': `url(${bg})`}}>

        <form className="cover-content w-400" onSubmit={(e) => {this.doLogin(e)}}>

          <div className="t-center">
            <img className="w-100" src={logo} alt="" />
          </div>

          <div className="p-2-0">
            <div className="material-input">

              <input type="text"
                     name="username"
                     id="username"
                     onChange = {(e) => {this.bindValue('username', e)}}
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
                     onChange = {(e) => {this.bindValue('password', e)}}
                     required />

              <label htmlFor="password">Password</label>
              <span/>
            </div>
          </div>

          <div className="p-2-0">
            <Button classNames={'btn-lg btn-border-light w-100-p rounded-3'}
                    loading={false}
                    type={'submit'}
                    text={'Sign in'} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
