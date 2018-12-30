import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

const form = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems:     'center',
  background: 'rgba(20,200,100,1)',
  padding: 20
}

const btn = {
  background: 'tomato',
  fontSize:   '1.1rem',
  color:      'white',
  padding:    '8px 20px',
  outline:    'none',
  border:     'none'
}

class LoginForm extends Component {
  login = (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    axios({
      method: 'post',
      url: '/auth',
      data: {
        user: {
          email: email,
          password: password
        }
      }
    })
    .then((response) => {
      localStorage.clear();
      const token = response.data.token;
      localStorage.setItem("token", token)
      console.log(localStorage);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    return(
      <form className="login-form" style={form}>
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
        <Button onClick={this.login} style={btn}>Login</Button>
      </form>
    )
  };
};

export default LoginForm;
