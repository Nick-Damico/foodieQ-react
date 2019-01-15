import React, { Component } from "react";
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

class NavigationBar extends Component {
  constructor(props) {
    super();
  }

  loggedOutLinks() {
    return (
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
    )
  };

  loggedInLinks() {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/recipes" className="nav-link">
            Recipes
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to="/recipes/new"
            className="nav-link text-black"
            onClick={() => this.props.toggleSignUpOverlay()}
          >
            Create Recipe
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to="/blogs"
            className="nav-link text-black"
            onClick={() => this.props.toggleLogInOverlay()}
          >
            Cooking Blogs
          </Link>
        </NavItem>
      </Nav>
    );
  };

  render() {
    const {isSignedIn} = this.props;

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
        {isSignedIn ? this.loggedInLinks() : this.loggedOutLinks()}
      </Navbar>
    );
  };
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}
export default connect(
  mapStateToProps,
  { toggleOverlay, toggleLogInOverlay, toggleSignUpOverlay }
)(NavigationBar);
