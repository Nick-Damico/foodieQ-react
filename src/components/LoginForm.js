import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component {
  login = (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
     const request = {"auth": {"email": email, "password": password}}
     console.log(request);
    axios.post('http://localhost:3001/api/v1/user_token', {
      dataType: 'json',
      data: request
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return(
      <form className="login-form">
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="true"
        />
        <br />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="true"
        />
        <br />
        <button onClick={this.login}>Login</button>
      </form>
    )
  };
};

export default LoginForm;
