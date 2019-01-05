import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../images/foodieq-logo.svg";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import "./NavigationBar.css";
import { toggleOverlay, toggleLogInOverlay } from "../actions";

class NavigationBar extends Component {
  toggle = () => {
    this.props.toggleOverlay();
  };

  toggleLogIn = () => {
    this.props.toggleLogInOverlay();
  };

  render() {
    return (
      <Navbar color="light" light expand>
        <div className="hamburger-nav" onClick={this.toggle}>
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
              className="nav-link btn nav-link__sign-up mint-green text-black"
              onClick={this.toggle}
            >
              Sign Up
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/login"
              className="nav-link btn nav-link__login blue text-white"
              onClick={this.toggleLogIn}
            >
              Log In
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default connect(
  null,
  { toggleOverlay, toggleLogInOverlay }
)(NavigationBar);
