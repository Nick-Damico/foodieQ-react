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
    axios.get('http://localhost:3001/api/v1/recipes')
    .then(response => {
      console.log(response);
      this.setState({
        recipes: response.data
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    const recipesLis = this.state.recipes.map((recipe,i) => <li key={i} className="recipe">{recipe.name}</li>)
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
