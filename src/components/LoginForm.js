import React, { Component } from 'react';
import jquery from 'jquery';

class LoginForm extends Component {
  login = (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
     const request = {"auth": {"email": email, "password": password}}
     console.log(request);
    $.ajax({
      url: "http://localhost:3000/api/v1/user_token",
      type: "POST",
      data: request,
      dataType: "json",
      success: function (result) {
        console.log(result)
        localStorage.setItem("jwt", result.jwt)
      }
    })
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
