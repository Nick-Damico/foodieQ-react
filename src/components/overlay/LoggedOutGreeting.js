import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Row, Col} from 'reactstrap';

const LoggedOutGreeting = () => {
  return (
    <React.Fragment>      
      <Row className="site-overlay__row-2">
        <Col xs={{ size: 8, offset: 2}}>
          <div>
            <h4 className="overlay-header">Welcome to FoodieQ</h4>
            <FontAwesomeIcon
            icon="user-circle"
            className="user-icon"
            />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
};

export default LoggedOutGreeting;
