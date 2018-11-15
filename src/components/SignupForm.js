import React, { Component } from 'react';
import axios from 'axios';

export default class SignupForm extends Component {

  handleClick = (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const passwordConfirm = document.querySelector('#password-confirmation').value;

    axios({
      method: 'post',
      url: '/signup',
      data: {
        user: {
          email: email,
          password: password,
          password_confirmation: passwordConfirm
        }
      }
    })
    .then((response) => {
     console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <form className="signup-form">
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
      <input
        id="password-confirmation"
        type="password"
        name="password-confirmation"
        placeholder="Password Confirmation"
        autoComplete="true"
      />
      <br />
      <button onClick={this.handleClick}>Sign Up</button>
      </form>
    )
  }
}
