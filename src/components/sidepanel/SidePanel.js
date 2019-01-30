import "./SidePanel.css";
import React, { Component } from "react";
import Menus from "./Menus";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem } from "reactstrap";
import { TweenMax, Back } from "gsap/TweenMax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import FoodieqCog  from "../../images/sidebar-icons/foodieq-cog.svg";
import MenuIcon from "../../images/sidebar-icons/menu-icon.svg";
import FoodieqIcon from "../../images/sidebar-icons/Foodieq-light-icon.svg";
import GraphIcon from "../../images/sidebar-icons/graph.svg";

class SidePanel extends Component {
  constructor(props) {
    super();
    this.sidePanel = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      TweenMax.to(this.sidePanel.current, 1, {
        ease: Back.easeInOut.config(1.5),
        left: 0
      });
    } else {
      TweenMax.to(this.sidePanel.current, 1, {
        ease: Back.easeInOut.config(1.5),
        left: -280
      });
    }
  }

  render() {
    const { email } = this.props.currentUser;
    return (
      <aside ref={this.sidePanel} className="side-panel">
        <Container>
          <Row className="side-panel__user-container">
            <Col xs={{ size: 2 }} className="side-panel__user-icon-container">
              <FontAwesomeIcon icon="user-circle" className="side-panel__user-icon" />
            </Col>
            <Col xs={{ size: 8 }} className="side-panel__email">
              { email }
            </Col>
            <Col xs={{ size: 2 }}>
              <img className="icon icon-cog" src={FoodieqCog} alt="User Options" />
            </Col>
          </Row>
          <Row>
            <Nav className="side-panel__nav">
              <NavItem className="side-panel__nav-item">
                <img className="side-panel__nav-icon menu-icon" src={MenuIcon} alt="menu items" />
                <Link to="/recipes">Menu</Link>
              </NavItem>
              <NavItem className="side-panel__nav-item">
                <img className="side-panel__nav-icon recipe-icon" src={FoodieqIcon} alt="Recipes" />
                <Link to="/recipes/new">Recipes</Link>
              </NavItem>
              <NavItem className="side-panel__nav-item">
                <img className="side-panel__nav-icon graph-icon" src={GraphIcon} alt="Graph" />
                <Link to="/blogs">Graph</Link>
              </NavItem>
            </Nav>
          </Row>
          <Row>
            <Menus />
          </Row>
        </Container>
      </aside>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.ui.sidePanel.isOpen,
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  {}
)(SidePanel);
