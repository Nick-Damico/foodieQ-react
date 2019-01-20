import React from "react";
import SignupForm from "../users/SignupForm";
import Greeting from "./Greeting";
import { Row, Col } from "reactstrap";

const SignUp = () => {
  return (
    <Greeting>
      <Row>
        <Col
          xs={{ size: 12 }}
          sm={{ size: 10, offset: 1 }}
          md={{ size: 8, offset: 2 }}
          lg={{ size: 6, offset: 3 }}
        >
          <SignupForm />
        </Col>
      </Row>
    </Greeting>
  );
};

export default SignUp;
