import React, { Component } from "react";
import Greeting from '../overlay/Greeting';
import GoogleAuth from '../users/GoogleAuth';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Row,
  Col
} from "reactstrap";
import { connect } from "react-redux";
import { logInUser, setCurrentUser, toggleSignUpOverlay } from "../../actions";

class LoginForm extends Component {
  state = { email: "", password: "" };

  handleOnClick = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.logInUser(user);
  };

  renderForm() {
    return (
      <React.Fragment>
        <Greeting>
          <Row>
            <Col xs={{ size: 12 }}>
              <Form className="login-form" onSubmit={this.handleOnSubmit}>
                <FormGroup>
                  <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="true"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="true"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                  />
                </FormGroup>
                <Button className="login-button" size="lg" block>Login</Button>
                <GoogleAuth text={"Login with Google"} />
                <br />
                Not a member? <Button onClick={this.props.toggleSignUpOverlay} className="signup-button" size="sm">Sign Up</Button>
              </Form>
            </Col>
          </Row>
        </Greeting>
      </React.Fragment>
    );
  }

  renderGreeting() {
    return <div>Welcome</div>;
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
  { logInUser, setCurrentUser, toggleSignUpOverlay }
)(LoginForm);
