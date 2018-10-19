import React, { Component } from 'react';
import axios from 'axios';

class RecipesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    axios.get('https://foodie-q.herokuapp.com/api/v1/recipes.json')
    .then(response => {
      console.log(response);
      this.setState({
        recipes: response.data
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    const recipesLis = this.state.recipes.map((recipe,i) => {
      <li key={i} className="recipe">
        <h3 className="recipe-name">{recipe.name}</h3>
        <p className="recipe-description">{recipe.description}</p>
      </li>
    )};
    return (
      <div className="recipes-container">
        <h2> Recipes </h2>
        <ul className="recipes">
          {recipesLis}
        </ul>
      </div>
    )
  };
};

export default RecipesContainer;
