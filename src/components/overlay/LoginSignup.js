import React from 'react';
import {Button, Row, Col} from 'reactstrap';
import Greeting from './Greeting';
import {connect} from 'react-redux';
import {toggleLogInOverlay} from '../../actions';

const LoginSignup = (props) => {
  return(
    <Greeting>
      <Row>
        <Col xs={{ size: 12 }} sm={{ size: 8, offset: 2 }}>
          <Button onClick={props.toggleLogInOverlay} color="primary" size="lg" block>Login</Button>
          <Button className="btn signup-button" size="lg" block>Sign Up</Button>
        </Col>
      </Row>
    </Greeting>
  );
};

export default connect(null,{toggleLogInOverlay})(LoginSignup);
