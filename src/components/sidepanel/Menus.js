import "./Menus.css";
import React, { Component } from "react";
import { Col, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import RecipeBookLight from "../../images/sidebar-icons/recipe-book-dark-icon.svg";
import TypewriterLight from "../../images/sidebar-icons/typewriter-dark-icon.svg";
import BlogLight from "../../images/sidebar-icons/blog-dark-icon.svg";
import FoodieqLight from "../../images/sidebar-icons/foodieq-dark-icon.svg";

class Menus extends Component {
  constructor() {
    super();

    this.navItems = document.querySelectorAll(".menus__nav-item");
  }

  componentDidMount() {

  }

  render() {
    return (
      <Nav className="menus__nav">
        <NavItem className="menus__nav-item">
          <Link to="/" className="menus__nav-link">
            <Col xs={{ size: 4 }}>
              <img
                className="menus__nav-image"
                src={RecipeBookLight}
                alt="Recipe Book Item"
              />
            </Col>
            <Col xs={{ size: 8 }} className="menus__text-container">
              <p className="menus__text">View Recipes</p>
            </Col>
          </Link>
        </NavItem>
        <NavItem className="menus__nav-item">
          <Link to="/recipes/new" className="menus__nav-link">
            <Col xs={{ size: 4 }}>
              <img
                className="menus__nav-image"
                src={TypewriterLight}
                alt="Recipe Book Item"
              />
            </Col>
            <Col xs={{ size: 8 }} className="menus__text-container">
              <p className="menus__text">Create Recipe</p>
            </Col>
          </Link>
        </NavItem>
        <NavItem className="menus__nav-item">
          <Link to="/" className="menus__nav-link">
            <Col xs={{ size: 4 }}>
              <img
                className="menus__nav-image"
                src={BlogLight}
                alt="Recipe Book Item"
              />
            </Col>
            <Col xs={{ size: 8 }} className="menus__text-container">
              <p className="menus__text">View Blogs</p>
            </Col>
          </Link>
        </NavItem>
        <NavItem className="menus__nav-item">
          <Link to="/" className="menus__nav-link">
            <Col xs={{ size: 4 }}>
              <img
                className="menus__nav-image"
                src={FoodieqLight}
                alt="Recipe Book Item"
              />
            </Col>
            <Col xs={{ size: 8 }} className="menus__text-container">
              <p className="menus__text">Create Post</p>
            </Col>
          </Link>
        </NavItem>
      </Nav>
    );
  }
}

export default Menus;
