import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from './api';
import { Link } from 'react-router-dom';

class Login extends Component {

  submitUser(loginUser) {

    axios.post(`${API_URL}/AppUsers/login`, loginUser).then(response => {
      this.props.onAuthenticate(response.data);
      localStorage.setItem('token', response.data.id);
      localStorage.setItem('userId', response.data.userId);
      this.props.history.goBack();
    }).catch(err => console.log(err));
  }

  onSubmit(e) {
    const loginUser = {
      email: this.refs.email.value,
      password: this.refs.password.value,
    }
    this.submitUser(loginUser);
    e.preventDefault();
  }

  render() {
    return (
      <div>

        <h1>Login</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="email" ref="email"  value="preshetin@gmail.com"/>
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input type="text" name="password" ref="password" value="xxx" />
            <label htmlFor="password">  Password</label>
          </div>
          <input type="submit" value="Login" className="btn blue darken-3"/>
          <Link className="btn right" to="/AddUsers">Create Account</Link>
        </form>
      </div>
    )
  }
}
export default Login;
