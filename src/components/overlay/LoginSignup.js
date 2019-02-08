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
        <Col
          xs={{ size: 10, offset: 1 }}
          sm={{ size: 8, offset: 2 }}
          md={{ size: 6, offset: 3 }}
          lg={{ size: 4, offset: 4 }}
        >
          <Link to="/login">
            <Button
              onClick={props.toggleLogInOverlay}
              className="btn login-button mb-3"
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
