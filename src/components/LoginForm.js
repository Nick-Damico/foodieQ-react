import React, { Component } from 'react';
// import $ from 'jquery';
import axios from 'axios';

class LoginForm extends Component {
  login = (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
     const request = {"auth": {"email": email, "password": password}}
     console.log(request);
     axios({
       method: 'post',
       url: '/login',
       data: {
         auth: {
           email: email,
           password: password
         }
       }
     })
     .then((response) => {
      localStorage.clear();
      const token = response.data.jwt;
      localStorage.setItem("token", token)
      console.log(localStorage);
     })
     .catch((error) => {
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
