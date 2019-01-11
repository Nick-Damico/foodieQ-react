import './SignupForm.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import { signInUser } from "../../actions";
import { Button, Form, FormGroup, Input, Row, Col } from "reactstrap";
import { TweenMax, Power1} from "gsap/TweenMax";

class SignUp extends Component {
  formContainer = null;
  state = { email: "", password: "", password_confirmation: "" };

  handleOnSubmit(e) {
    e.preventDefault();
  }

  componentDidMount() {
    TweenMax.to(this.formContainer, 1.4, { opacity: 1, ease: Power1.easeInOut} );
  }

  render() {
    return (
      <React.Fragment>
        <div ref={div => (this.formContainer = div)} className="signup-form__container">
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
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
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

export default connect(
  null,
  { signInUser }
)(SignUp);
