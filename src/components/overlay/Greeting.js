import "./Greeting.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "reactstrap";

const Greeting = (props) => {
  return (
    <React.Fragment>
      <Row className="site-overlay__row-2">
        <Col xs={{ size: 12 }} sm={{ size: 8, offset: 2 }}>
          <div>
            <h4 className="overlay-header">{props.text}</h4>
            <FontAwesomeIcon icon="user-circle" className="user-icon" />
          </div>
        </Col>
      </Row>
      {props.children}
    </React.Fragment>
  );
};

Greeting.defaultProps = {
  text: 'Welcome to FoodieQ'
}

export default Greeting;
