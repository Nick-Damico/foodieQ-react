import React, { Component } from "react";
import { Button } from "reactstrap";
import "./SiteOverlay.css";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { toggleOverlay } from "../actions";

const SiteOverlay = ({ isOverlayOpen, toggleOverlay }) => {
  const overlayActive = isOverlayOpen ? "open" : "";

  return (
    <Container className={`site-overlay blue text-white ${overlayActive}`}>
      <Row className="site-overlay__row-1">
        <Col xs={{ size: 6, offset: 6 }}>Close</Col>
      </Row>
    </Container>
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
