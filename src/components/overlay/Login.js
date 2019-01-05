import React, { Component } from "react";
import Greeting from './Greeting';
import GoogleAuth from '../users/GoogleAuth';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col
} from "reactstrap";
import './Login.css';
import { connect } from "react-redux";
import { logInUser, setCurrentUser } from "../../actions";

class LoginForm extends Component {
  state = { email: "", password: "" };

  handleOnSubmit = e => {
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
                <br />
                <Button color="primary" size="lg" block>Login</Button>
                <GoogleAuth />
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
  { logInUser, setCurrentUser }
)(LoginForm);