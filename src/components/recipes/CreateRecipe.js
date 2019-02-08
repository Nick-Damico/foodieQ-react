import "./CreateRecipe.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import FieldFileInput from "../FieldFileInput";
import { Field, reduxForm } from "redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Container,
  Button
} from "reactstrap";

class CreateRecipe extends Component {
  constructor() {
    super();
    this.increaseIngredientCount = this.increaseIngredientCount.bind(this);
    this.increaseStepCount = this.increaseStepCount.bind(this);
    this.state = {
      ingredientInputCount: 1,
      stepInputCount: 1
    };
  }

  renderTextInput({ input, label, type = "text", placeholder = "" }) {
    return (
      <FormGroup>
        {label ? <Label>{label}</Label> : null}
        <Input {...input} type={type} placeholder={placeholder} />
      </FormGroup>
    );
  }

  renderCheckboxInput({ input }) {
    return (
      <FormGroup check className="mb-3 ml-2">
        <Label check>
          <Input {...input} type="checkbox" />
          Publish?
        </Label>
      </FormGroup>
    );
  }

  increaseIngredientCount() {
    this.setState({ ingredientInputCount: ++this.state.ingredientInputCount });
  }

  increaseStepCount() {
    this.setState({ stepInputCount: ++this.state.stepInputCount });
  }

  renderIngredientInputs() {
    let ingredientInputs = [];
    for (let i = 0; i < this.state.ingredientInputCount; i++) {
      ingredientInputs.push(
        <Field
          key={`${i}`}
          component={this.renderTextInput}
          name={`recipe[ingredients][${i}]`}
          placeholder="ex. 1cup of water"
        />
      );
    }
    return ingredientInputs;
  }

  renderStepInputs() {
    let stepInputs = [];
    for (let i = 0; i < this.state.stepInputCount; i++) {
      stepInputs.push(
        <Field
          key={`${i}`}
          component={this.renderTextInput}
          name={`recipe[steps][${i}]`}
          placeholder="Give step by step instructions"
        />
      );
    }
    return stepInputs;
  }

  render() {
    let ingredientInputs = this.renderIngredientInputs();
    let stepInputs = this.renderStepInputs();

    return (
      <Container>
        <h3 className="leading-3 text-left mt-3">
          Share your latest creation with the world
        </h3>
        <Row>
          <Col
            xs={{ size: 12 }}
            sm={{ size: 10, offset: 1 }}
            md={{ size: 8, offset: 2 }}
            lg={{ size: 6, offset: 3 }}
          >
            <Form className="text-left">
              <Field name="recipe[image]" component={FieldFileInput} />
              <Field
                component={this.renderTextInput}
                type="text"
                name="recipe[title]"
                label="Recipe Title"
              />
              <Field
                component={this.renderTextInput}
                type="textarea"
                name="recipe[description]"
                label="Recipe Description"
              />
              <FormGroup tag="fieldset">
                <h4 className="leading-4 text-left mb-0">Ingredients</h4>
                <div id="ingredients-container">
                  {ingredientInputs}
                </div>
                <FontAwesomeIcon
                  icon="plus-circle"
                  className="recipe-form__plus-sign"
                  onClick={this.increaseIngredientCount}
                />{" "}
                Add Ingredient
              </FormGroup>
              <FormGroup tag="fieldset">
                <h4 className="leading-4 text-left mb-0">Cooking Steps</h4>
                <div id="ingredients-container">
                  {stepInputs}
                </div>
                <FontAwesomeIcon
                  icon="plus-circle"
                  className="recipe-form__plus-sign"
                  onClick={this.increaseStepCount}
                />{" "}
                Add Cooking Step
              </FormGroup>
              <Field
                component={this.renderCheckboxInput}
                name="recipe[published]"
              />
              <Button className="create-recipe-button">Create Recipe</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default reduxForm({ form: "recipeCreate" })(CreateRecipe);
