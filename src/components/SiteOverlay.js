import React, { Component } from "react";
import { Button } from "reactstrap";
import "./SiteOverlay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { toggleOverlay } from "../actions";

const SiteOverlay = ({ isOverlayOpen, toggleOverlay }) => {
  const overlayActive = isOverlayOpen ? "open" : "";

  return (
    <div className={`site-overlay blue text-white ${overlayActive}`}>
      <Container>
        <Row className="site-overlay__row-1">
          <Col xs={{ size: 6, offset: 6 }}>
            <FontAwesomeIcon
              icon="times"
              onClick={() => toggleOverlay()}
              className="site-overlay__close-btn"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isOverlayOpen: state.ui.isOverlayOpen
  };
};

export default connect(
  mapStateToProps,
  { toggleOverlay }
)(SiteOverlay);
