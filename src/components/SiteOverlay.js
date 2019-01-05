import React, { Component } from "react";
import { Button } from "reactstrap";
import "./SiteOverlay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { toggleOverlay } from "../actions";
import LoggedOutGreeting from './overlay/LoggedOutGreeting';
import lemonadePic from '../images/rasp-lemonade.png';

const SiteOverlay = ({ isOverlayOpen, toggleOverlay, showLogIn }) => {
  const overlayActive = isOverlayOpen ? "open" : "";
  let component;
  if (showLogIn) {
    component = <div>Login</div>;
  } else {
    component = <LoggedOutGreeting />;
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
        { component }
      </Container>
      <img src={lemonadePic} alt="" className="lemonade-pic" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isOverlayOpen: state.ui.overlay.isOverlayOpen,
    showLogIn: state.ui.overlay.showLogIn
  };
};

export default connect(
  mapStateToProps,
  { toggleOverlay }
)(SiteOverlay);
