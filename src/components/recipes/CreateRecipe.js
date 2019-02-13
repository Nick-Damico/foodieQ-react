import "./CreateRecipe.css";
import React, { Component } from "react";
import FieldFileInput from "../FieldFileInput";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createRecipe } from "../../actions";
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

    this.increaseItemCount = this.increaseItemCount.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      ingredientInputCount: 1,
      stepInputCount: 1,
      removedIngredientIndex: [],
      removedStepIndex: []
    };
  }

  ////////////////////////////////
  // Helpers
  ////////////////////////////////
  renderTextInput = ({
    input,
    meta,
    label,
    type = "text",
    placeholder = ""
  }) => {
    return (
      <FormGroup>
        {label ? <Label>{label}</Label> : null}
        <Input {...input} type={type} placeholder={placeholder} />
        {this.renderError(meta)}
      </FormGroup>
    );
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui__error-message">
          <div className="error">{error}</div>
        </div>
      );
    }
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

  increaseItemCount(type) {
    if (type === "ingredient") {
      this.setState({
        ingredientInputCount: this.state.ingredientInputCount + 1
      });
    } else {
      this.setState({ stepInputCount: this.state.stepInputCount + 1 });
    }
  }

  removeItem(event, index, type) {
    if (type === "ingredient") {
      this.setState({
        removedIngredientIndex: [...this.state.removedIngredientIndex, index]
      });
    } else {
      this.setState({
        removedStepIndex: [...this.state.removedStepIndex, index]
      });
    }
  }

  renderInputs(type, placeholderText = "") {
    const { ingredientInputCount, stepInputCount } = this.state;
    let typeInputs = [];
    let itemCount =
      type === "ingredient" ? ingredientInputCount : stepInputCount;
    let name = type === "ingredient" ? 'name' : 'description';

    for (let i = 0; i < itemCount; i++) {
      typeInputs.push(
        <div className="input-wrapper" key={`${i}`}>
          <Row>
            <Col xs={{ size: 10 }} lg={{ size: 11 }}>
              <Field
                key={`${type}-${i}`}
                component={this.renderTextInput}
                name={`recipe[${type}s_attributes][${i}][${name}]`}
                placeholder={placeholderText}
              />
            </Col>
            {i > 0 ? (
              <Col xs={{ size: 2 }} lg={{ size: 1 }}>
                <React.Fragment>
                  <Button
                    className="recipe-form__minus-sign"
                    onClick={e => this.removeItem(e, i, type)}
                  >
                    <FontAwesomeIcon icon="minus-circle" />
                  </Button>
                </React.Fragment>
              </Col>
            ) : null}
          </Row>
        </div>
      );
    }
    return typeInputs;
  }

  onSubmit(formValues) {
    // Remove Ingredients and Steps deleted during recipe creation.
    const { currentUser } = this.props;
    const { removedIngredientIndex, removedStepIndex } = this.state;
    if (removedIngredientIndex.length > 0) {
      formValues.recipe.ingredients_attributes = formValues.recipe.ingredients_attributes.filter(
        (val, index, arr) => !removedIngredientIndex.includes(index)
      );
    }
    if (removedStepIndex.length > 0) {
      formValues.recipe.steps_attributes = formValues.recipe.steps_attributes.filter(
        (val, index, arr) => !removedStepIndex.includes(index)
      );
    }
    this.props.createRecipe(currentUser,formValues);
  }

  //////////////////////////////////
  // CreateRecipe Component Render
  //////////////////////////////////
  render() {
    const { removedIngredientIndex, removedStepIndex } = this.state;
    let ingredientInputs = this.renderInputs("ingredient", "ex. 1Cup of Milk");
    let stepInputs = this.renderInputs("step", "ex. Add Flour to bowl");

    return (
      <Container>
        <h3 className="leading-3 text-center mt-3">
          Share your latest creation with the world
        </h3>
        <Row>
          <Col
            xs={{ size: 12 }}
            sm={{ size: 10, offset: 1 }}
            md={{ size: 8, offset: 2 }}
            lg={{ size: 6, offset: 3 }}
          >
            <Form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="create-recipe__form text-left"
            >
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
                <Button onClick={() => this.increaseItemCount("ingredient")}>
                  <FontAwesomeIcon
                    icon="plus-circle"
                    className="recipe-form__plus-sign"
                  />{" "}
                  Add Ingredient
                </Button>
              </FormGroup>
              <FormGroup tag="fieldset">
                <h4 className="leading-4 text-left mb-0">Cooking Steps</h4>
                <div id="ingredients-container">
                  {stepInputs.filter(
                    (el, i) => (removedStepIndex.includes(i) ? null : el)
                  )}
                </div>
                <Button onClick={() => this.increaseItemCount("step")}>
                  <FontAwesomeIcon
                    icon="plus-circle"
                    className="recipe-form__plus-sign"
                  />{" "}
                  Add Cooking Step
                </Button>
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

//////////////////////////////////
// Validations
//////////////////////////////////
const validate = formValues => {
  const errors = { recipe: {} };
  if (formValues.recipe) {
    const { recipe } = formValues;
    if (!recipe.title) {
      errors.recipe.title = "You must enter a title";
    }
    if (recipe.title && recipe.title.length > 100) {
      errors.recipe.title = "Max length is 100 characters";
    }

    if (!recipe.description) {
      errors.recipe.description = "You must enter a description";
    }
    if (recipe.description && recipe.description.length > 1500) {
      errors.recipe.description = "Max length is 100 characters";
    }
  }

  return errors;
};

const formWrapped = reduxForm({ form: "recipeCreate", validate: validate })(
  CreateRecipe
);

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
};

export default connect(mapStateToProps, { createRecipe })(formWrapped);
