import React, { Component } from "react";
import Greeting from "../overlay/Greeting";
import GoogleAuth from "../users/GoogleAuth";
import "./loginForm.css";
import { Button, Form, FormGroup, Input, Row, Col } from "reactstrap";
import { TweenMax, Power1 } from "gsap/TweenMax";
import { connect } from "react-redux";
import { logInUser, setCurrentUser, toggleSignUpOverlay } from "../../actions";

class LoginForm extends Component {
  formContainer = null;
  state = { email: "", password: "" };

  handleOnSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.logInUser(user);
  };

  componentDidMount() {
    TweenMax.to(this.formContainer, 1.4, {
      opacity: 1,
      ease: Power1.easeInOut
    });
  }

  displayErrors() {
    const { formErrors } = this.props;
    const errorItems = formErrors.map((error, i) => (
      <li key={`error-${i}`} className="error-message__item">
        {error}
      </li>
    ));

    return (
      <Col xs={{ size: 12 }}>
        <ul className="error-message">{errorItems}</ul>
      </Col>
    );
  }

  renderForm() {
    return (
      <React.Fragment>
        <Greeting>
          <Row>
            {this.props.formErrors.length > 0 ? this.displayErrors() : null}
            <Col xs={{ size: 12 }}>
              <div
                ref={div => (this.formContainer = div)}
                className="login-form__container"
              >
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
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </FormGroup>
                  <Button className="login-button" size="lg" block>
                    Login
                  </Button>
                  <GoogleAuth text={"Login with Google"} />
                  <br />
                  Not a member?{" "}
                  <Button
                    onClick={this.props.toggleSignUpOverlay}
                    className="signup-button"
                    size="sm"
                  >
                    Sign Up
                  </Button>
                </Form>
              </div>
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
    isSignedIn: state.auth.isSignedIn,
    formErrors: state.auth.errors
  };
};

export default connect(
  mapStateToProps,
  { logInUser, setCurrentUser, toggleSignUpOverlay }
)(LoginForm);
