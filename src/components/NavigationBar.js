import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../images/foodieq-logo.svg";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import "./NavigationBar.css";
import {
  toggleOverlay,
  toggleLogInOverlay,
  toggleSignUpOverlay
} from "../actions";

const NavigationBar = props => {
  return (
    <Navbar color="light" light expand>
      <div className="hamburger-nav" onClick={() => this.props.toggleOverlay()}>
        <div className="hamburger-nav__bar1" />
        <div className="hamburger-nav__bar2" />
        <div className="hamburger-nav__bar3" />
      </div>
      <NavbarBrand>
        <img className="brand-logo" src={logo} alt="Foodie Q" />
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/recipes" className="nav-link">
            Find a Recipe
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to="/signup"
            className="btn nav-link signup-button text-black"
            onClick={() => this.props.toggleSignUpOverlay()}
          >
            Sign Up
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to="/login"
            className="btn nav-link login-button text-white"
            onClick={() => this.props.toggleLogInOverlay()}
          >
            Log In
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default connect(
  null,
  { toggleOverlay, toggleLogInOverlay, toggleSignUpOverlay }
)(NavigationBar);
