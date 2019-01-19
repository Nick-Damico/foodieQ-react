import React, { Component } from "react";
import "./SiteOverlay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import { TweenMax } from "gsap/TweenMax";
import { connect } from "react-redux";
import { toggleOverlay } from "../actions";
import Login from "./overlay/Login";
import SignUp from "./overlay/SignUp";
import LoginSignup from "./overlay/LoginSignup";

class SiteOverlay extends Component {
  constructor(props) {
    super();

    this.siteOverlayDiv = null;
    this.login = null;
    this.close = this.close.bind(this);
  }

  // Helpers
  componentToDisplay() {
    if (this.props.showLogIn) {
      return <Login active={true} />;
    } else if (this.props.showSignUp) {
      return <SignUp ref={this.signup} />;
    } else {
      return <LoginSignup />;
    }
  }

  close() {
    let component = this;
    let myAnimation = TweenMax.to(this.siteOverlayDiv, 1, {
      opacity: 0,
      y: -100
    });
    myAnimation.eventCallback("onComplete", function() {
      component.props.toggleOverlay();
    });
  }

  //Lifecycle Methods
  componentDidMount() {
    TweenMax.to(this.siteOverlayDiv, 1, { opacity: 1, y: 0 });
  }

  render() {
    const component = this.componentToDisplay();

    return (
      <div
        ref={div => (this.siteOverlayDiv = div)}
        className={`site-overlay blue text-white`}
      >
        <Container>
          <Row className="site-overlay__row-1">
            <Col className="close-container" xs={{ size: 6, offset: 6 }}>
              <Link to="/">
                <FontAwesomeIcon
                icon="times"
                onClick={this.close}
                className="site-overlay__close-btn"
                />
              </Link>
            </Col>
          </Row>
          {component}
        </Container>
      </div>
    );
  }
}

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
