import React from "react";
import Greeting from './Greeting';
import LoginForm from '../users/LoginForm';
import { Row, Col } from 'reactstrap';

const Login = props => {
  return (
    <Greeting>
      <Row>
        <Col
          xs={{ size: 12 }}
          sm={{ size: 10, offset: 1 }}
          md={{ size: 8, offset: 2 }}
          lg={{ size: 6, offset: 3 }}
        >
         <LoginForm />
        </Col>
      </Row>
    </Greeting>
  );
};

export default Login;
