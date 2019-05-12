import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import SignOutButton from "./users/SignOutButton";
import { connect } from "react-redux";
import logo from "../images/foodieq-logo.svg";
import "./NavigationBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  toggleOverlay,
  toggleSidePanel,
  toggleLogInOverlay,
  toggleSignUpOverlay
} from "../actions";

class NavigationBar extends Component {
  constructor(props) {
    super();
  }

  navToggle = () => {
    if (this.props.isSignedIn) {
      this.props.toggleSidePanel();
    } else {
      this.props.toggleOverlay();
    }
  }

  loggedOutLinks() {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink
            to="/recipes" className="nav-link">
            Find a Recipe
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/signup"
            className="btn nav-button signup-button text-white"
            activeClassName="selected"
            onClick={() => this.props.toggleSignUpOverlay()}
          >
            Sign Up
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/login"
            className="btn nav-button login-button text-white"
            onClick={() => this.props.toggleLogInOverlay()}
          >
            Log In
          </NavLink>
        </NavItem>
      </Nav>
    );
  }

  loggedInLinks() {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink
            to="/recipes"
            className="nav-link"
            activeClassName="selected"
            exact={true}
          >
            <FontAwesomeIcon icon="book" className="book" /> Recipes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/recipes/new"
            className="nav-link text-black"
            activeClassName="selected"
            exact={true}
          >
            Create Recipe
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/blogs"
            className="nav-link text-black"
            activeClassName="selected"
            exact={true}
          >
            Cooking Blogs
          </NavLink>
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
        <div className="hamburger-nav" onClick={this.navToggle}>
          <div className="hamburger-nav__bar1" />
          <div className="hamburger-nav__bar2" />
          <div className="hamburger-nav__bar3" />
        </div>
        <NavLink to="/">
          <img className="brand-logo" src={logo} alt="Foodie Q" />
        </NavLink>
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
  {
    toggleOverlay,
    toggleLogInOverlay,
    toggleSignUpOverlay,
    toggleSidePanel
  }
)(NavigationBar);
