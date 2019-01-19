import React from "react";
import { Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Greeting from "./Greeting";
import { connect } from "react-redux";
import { toggleLogInOverlay, toggleSignUpOverlay } from "../../actions";

const LoginSignup = props => {
  return (
    <Greeting>
      <Row>
        <Col xs={{ size: 12 }} sm={{ size: 8, offset: 2 }}>
          <Link to="/login">
            <Button
              onClick={props.toggleLogInOverlay}
              className="btn login-button"
              size="lg"
              block
            >
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              onClick={props.toggleSignUpOverlay}
              className="btn signup-button"
              size="lg"
              block
            >
              Sign Up
            </Button>
          </Link>
        </Col>
      </Row>
    </Greeting>
  );
};

export default connect(
  null,
  { toggleLogInOverlay, toggleSignUpOverlay }
)(LoginSignup);
