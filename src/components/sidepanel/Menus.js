import "./Menus.css";
import React from "react";
import { Container, Row, Col, Nav, NavItem } from "reactstrap";
import RecipeBookLight from "../../images/sidebar-icons/recipe-book-dark-icon.svg";
import TypewriterLight from "../../images/sidebar-icons/typewriter-dark-icon.svg";
import BlogLight from "../../images/sidebar-icons/blog-dark-icon.svg";
import FoodieqLight from "../../images/sidebar-icons/foodieq-dark-icon.svg";

const Menus = props => {
  return (
    <Nav className="menus__nav">
      <NavItem className="menus__nav-item">
        <Col xs={{ size: 4 }}>
          <img className="menus__nav-image" src={RecipeBookLight} alt="Recipe Book Item" />
        </Col>
        <Col xs={{ size: 8 }} className="menus__text-container">
          <p className="menus__text">View Recipes</p>
        </Col>
      </NavItem>
      <NavItem className="menus__nav-item">
        <Col xs={{ size: 4 }}>
          <img className="menus__nav-image" src={TypewriterLight} alt="Recipe Book Item" />
        </Col>
        <Col xs={{ size: 8 }} className="menus__text-container">
          <p className="menus__text">Create Recipe</p>
        </Col>
      </NavItem>
      <NavItem className="menus__nav-item">
        <Col xs={{ size: 4 }}>
          <img className="menus__nav-image" src={BlogLight} alt="Recipe Book Item" />
        </Col>
        <Col xs={{ size: 8 }} className="menus__text-container">
          <p className="menus__text">View Blogs</p>
        </Col>
      </NavItem>
      <NavItem className="menus__nav-item">
        <Col xs={{ size: 4 }}>
          <img className="menus__nav-image" src={FoodieqLight} alt="Recipe Book Item" />
        </Col>
        <Col xs={{ size: 8 }} className="menus__text-container">
          <p className="menus__text">Create Post</p>
        </Col>
      </NavItem>
    </Nav>
  );
};

export default Menus;
