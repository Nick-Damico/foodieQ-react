import "./SignupForm.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpUser } from "../../actions";
import FormErrors from './FormErrors';
import { Button, Form, FormGroup, Input, Row, Col } from "reactstrap";
import { TweenMax, Power1 } from "gsap/TweenMax";

class SignUp extends Component {
  formContainer = null;
  state = { email: "", password: "", password_confirmation: "" };

  handleOnSubmit = (e) => {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    }

    this.props.signUpUser(user);
  }

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
        <div
          ref={div => (this.formContainer = div)}
          className="signup-form__container"
        >
          <Row>
            { formErrors.length > 0 ? <FormErrors errors={formErrors} /> : null}
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
                    autoComplete="new-password"
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    placeholder="Password Confirmation"
                    autoComplete="new-password"
                    value={this.state.password_confirmation}
                    onChange={e =>
                      this.setState({ password_confirmation: e.target.value })
                    }
                  />
                </FormGroup>
                <br />
                <Button className="signup-button" size="lg" block>
                  Sign Up
                </Button>
              </Form>
            </Col>
          </Row>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formErrors: state.auth.errors
  }
};

export default connect(
  mapStateToProps,
  { signUpUser }
)(SignUp);
