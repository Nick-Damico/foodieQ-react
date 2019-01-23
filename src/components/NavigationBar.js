import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import SignOutButton from "./users/SignOutButton";
import { connect } from "react-redux";
import logo from "../images/foodieq-logo.svg";
import "./NavigationBar.css";
import {
  toggleOverlay,
  toggleLogInOverlay,
  toggleSignUpOverlay,
  googleSignOut
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
            className="btn nav-link signup-button text-white"
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
    );
  }

  loggedInLinks() {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/recipes" className="nav-link">
            Recipes
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/recipes/new" className="nav-link text-black">
            Create Recipe
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/blogs" className="nav-link text-black">
            Cooking Blogs
          </Link>
        </NavItem>
        <NavItem>
          <SignOutButton />
        </NavItem>
      </Nav>
    );
  }

  render() {
    const { isSignedIn } = this.props;

    return (
      <Navbar color="light" light expand>
        <div
          className="hamburger-nav"
          onClick={() => this.props.toggleOverlay()}
        >
          <div className="hamburger-nav__bar1" />
          <div className="hamburger-nav__bar2" />
          <div className="hamburger-nav__bar3" />
        </div>
        <NavbarBrand>
          <Link to="/">
            <img className="brand-logo" src={logo} alt="Foodie Q" />
          </Link>
        </NavbarBrand>
        {isSignedIn ? this.loggedInLinks() : this.loggedOutLinks()}
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(
  mapStateToProps,
  { toggleOverlay, toggleLogInOverlay, toggleSignUpOverlay, googleSignOut }
)(NavigationBar);
