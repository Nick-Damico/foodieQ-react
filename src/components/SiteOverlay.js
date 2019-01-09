import React from "react";
import "./SiteOverlay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { toggleOverlay } from "../actions";
import Login from "./overlay/Login";
import SignUp from "./overlay/SignUp";
import LoginSignup from "./overlay/LoginSignup";

import veggieBowlPic from "../images/overlay/veggie-bowl.png";

const SiteOverlay = ({
  isOverlayOpen,
  toggleOverlay,
  showLogIn,
  showSignUp
}) => {
  const overlayActive = isOverlayOpen ? "open" : "";
  let component;
  if (showLogIn) {
    component = <Login />;
  } else if (showSignUp) {
    component = <SignUp />;
  } else {
    component = <LoginSignup />;
  }
  return (
    <div className={`site-overlay blue text-white ${overlayActive}`}>
      <Container>
        <Row className="site-overlay__row-1">
          <Col className="close-container" xs={{ size: 6, offset: 6 }}>
            <FontAwesomeIcon
              icon="times"
              onClick={() => toggleOverlay()}
              className="site-overlay__close-btn"
            />
          </Col>
        </Row>
        {component}
      </Container>
      <img src={veggieBowlPic} alt="" className="veggie-bowl" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isOverlayOpen: state.ui.overlay.isOverlayOpen,
    showLogIn: state.ui.overlay.showLogIn,
    showSignUp: state.ui.overlay.showSignUp
  };
};

export default connect(
  mapStateToProps,
  { toggleOverlay }
)(SiteOverlay);
