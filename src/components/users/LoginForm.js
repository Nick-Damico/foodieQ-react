import React, { Component } from "react";
import './loginForm.css';
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { logInUser, setCurrentUser } from "../../actions";

class LoginForm extends Component {
  state = {email: '', password: ''}

  handleOnSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.logInUser(user);
  };

  renderForm() {
    return (
      <form className="login-form" onSubmit={this.handleOnSubmit}>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="true"
          value={this.state.email}
          onChange={e => this.setState({email: e.target.value})}
        />
        <br />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="true"
          value={this.state.password}
          onChange={e => this.setState({password: e.target.value})}
        />
        <br />
        <Button color="primary">
          Login
        </Button>
      </form>
    )
  }

  renderGreeting() {
    return <div>Welcome</div>
  }

  render() {
    if (this.props.isSignedIn) {
      return this.renderGreeting();
    } else {
      return this.renderForm();
    }
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { logInUser, setCurrentUser }
)(LoginForm);
