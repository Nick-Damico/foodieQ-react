import React, {Component} from 'react';
import GoogleAuth from '../users/GoogleAuth';
import Greeting from './Greeting';
import {connect} from 'react-redux';
import {toggleLogInOverlay} from '../../actions';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Row,
  Col
} from "reactstrap";

class SignUp extends Component {
  state = {email: '', password: '', password_confirmation: ''};

  handleOnSubmit(e) {
    e.preventDefault();
  }

  render() {
    return(
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
                <Button className="signup-button" size="lg" block>Sign Up</Button>
                <GoogleAuth text={"Sign Up with Google"} />
                <br />
                Already a member? <Button onClick={this.props.toggleLogInOverlay} className="login-button" size="sm">Login</Button>
              </Form>
            </Col>
          </Row>
        </Greeting>
      </React.Fragment>
    );
  }

};

export default connect(null,{toggleLogInOverlay})(SignUp);
