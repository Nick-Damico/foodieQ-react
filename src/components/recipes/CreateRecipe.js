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
  renderTextInput({ input, label, type = "text", placeholder = "" }) {
    return (
      <FormGroup>
        <Label>{label}</Label>
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

  render() {
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
                <Field
                  component={this.renderTextInput}
                  name="recipe[ingredients][0]"
                  placeholder="ex. 1cup of rice"
                />
                <FontAwesomeIcon icon="plus-circle" className="recipe-form__plus-sign"/> Add Ingredient
              </FormGroup>
              <FormGroup tag="fieldset">
                <h4 className="leading-4 text-left mb-0">Cooking Steps</h4>
                <Field
                  component={this.renderTextInput}
                  name="recipe[steps][0]"
                  placeholder="Give step by step instructions"
                />
                <FontAwesomeIcon icon="plus-circle" className="recipe-form__plus-sign"/> Add Cooking Step
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
