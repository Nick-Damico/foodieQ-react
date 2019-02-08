import "./CreateRecipe.css";
import React, { Component } from "react";
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
    this.removeIngredient = this.removeIngredient.bind(this);
    this.renderIngredientInputs = this.renderIngredientInputs.bind(this);
    this.state = {
      ingredientInputCount: 1,
      stepInputCount: 1,
      removedIngredientIndex: [],
      removedStepIndex: []
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
    this.setState({
      ingredientInputCount: this.state.ingredientInputCount + 1
    });
  }

  increaseStepCount() {
    this.setState({ stepInputCount: this.state.stepInputCount + 1 });
  }

  removeIngredient(e, i) {
    this.setState({
      removedIngredientIndex: [...this.state.removedIngredientIndex, i]
    });
  }

  removeStep(e, i) {
    this.setState({
      removedStepIndex: [...this.state.removedStepIndex, i]
    });
  }

  renderIngredientInputs() {
    const { ingredientInputCount } = this.state;
    let ingredientInputs = [];

    for (let i = 0; i < ingredientInputCount; i++) {
      ingredientInputs.push(
        <div className="input-wrapper" key={`${i}`}>
          <Field
            key={`ingredient-${i}`}
            component={this.renderTextInput}
            name={`recipe[ingredients][${i}]`}
            placeholder="ex. 1cup of water"
          />
          <a href="#" onClick={(e) => this.removeIngredient(e, i)}>
            <FontAwesomeIcon
              icon="minus-circle"
              className="recipe-form__minus-sign"
            />
          </a>
        </div>
      );
    }
    return ingredientInputs;
  }

  renderStepInputs() {
    let stepInputs = [];
    for (let i = 0; i < this.state.stepInputCount; i++) {
      stepInputs.push(
        <div className="input-wrapper" key={`${i}`}>
          <Field
            key={`step-${i}`}
            component={this.renderTextInput}
            name={`recipe[steps][${i}]`}
            placeholder="Give step by step instructions"
          />
          <FontAwesomeIcon
            icon="minus-circle"
            className="recipe-form__minus-sign"
            onClick={this.removeStep}
          />
          <a href="#" onClick={(e) => this.removeStep(e, i)}>
            <FontAwesomeIcon
              icon="minus-circle"
              className="recipe-form__minus-sign"
            />
          </a>
        </div>
      );
    }
    return stepInputs;
  }

  render() {
    const { removedIngredientIndex, removedStepIndex } = this.state;
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
                  {ingredientInputs.filter(
                    (el, i) => (removedIngredientIndex.includes(i) ? null : el)
                  )}
                </div>
                <FontAwesomeIcon
                  icon="plus-circle"
                  className="recipe-form__plus-sign"
                  onClick={this.increaseIngredientCount}
                />
                Add Ingredient
              </FormGroup>
              <FormGroup tag="fieldset">
                <h4 className="leading-4 text-left mb-0">Cooking Steps</h4>
                <div id="ingredients-container">
                  {stepInputs.filter(
                    (el, i) => (removedStepIndex.includes(i) ? null : el)
                  )}
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
