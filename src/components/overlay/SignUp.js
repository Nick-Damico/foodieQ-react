import React from "react";
import SignupForm from "../users/SignupForm";
import GoogleAuth from "../users/GoogleAuth";
import Greeting from "./Greeting";
import { connect } from "react-redux";
import { toggleLogInOverlay } from "../../actions";
import { Button, Row, Col } from "reactstrap";
import './SignUp.css';

const SignUp = (props) => {
  return (
    <React.Fragment>
      <Greeting>
        <SignupForm>
          <Row>
            <Col xs={{ size: 12 }} className="google-auth__col">
              <GoogleAuth text={"Sign Up with Google"} />
              <br />
              Already a member?{" "}
              <Button
                onClick={props.toggleLogInOverlay}
                className="login-button"
                size="sm"
              >
                Login
              </Button>
            </Col>
          </Row>
        </SignupForm>
      </Greeting>
    </React.Fragment>
  );
}

export default connect(
  null,
  { toggleLogInOverlay }
)(SignUp);
