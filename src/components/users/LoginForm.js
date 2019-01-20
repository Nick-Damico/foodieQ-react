import React, { Component } from "react";
import Greeting from "../overlay/Greeting";
import GoogleAuth from "./GoogleAuth";
import FormErrors from "./FormErrors";
import { Button, Form, FormGroup, Input, Row, Col } from "reactstrap";
import "./loginForm.css";
import { Link } from "react-router-dom";
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

  render() {
    const { formErrors } = this.props;
    return (
      <React.Fragment>
        <Greeting>
          <Row>
            {this.props.formErrors.length > 0 ? (
              <FormErrors errors={formErrors} />
            ) : null}
            <Col
              xs={{ size: 12 }}
              sm={{ size: 10, offset: 1 }}
              md={{ size: 8,  offset: 2 }}
              lg={{ size: 6,  offset: 3 }}
            >
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
                  <Link to="/signup">
                    <Button
                      onClick={this.props.toggleSignUpOverlay}
                      className="signup-button"
                      size="sm"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </Form>
              </div>
            </Col>
          </Row>
        </Greeting>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    formErrors: state.auth.errors
  };
};

export default connect(
  mapStateToProps,
  { logInUser, setCurrentUser, toggleSignUpOverlay }
)(LoginForm);
