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
    // axios.get('/recipes.json')
    // .then(response => {
    //   this.setState({
    //     recipes: response.data
    //   })
    // })
    // .catch(error => console.log(error))
  }

  render() {
    const recipesLis = this.state.recipes.map((recipe,i) =>
      <li key={i} className="recipe">
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
      </li>
    )
    return (
      <div className="recipes-container">
        <h2> Recipes </h2>
        <ul className="recipes">
          {recipesLis.length === 0 ? 'Loading...' : recipesLis}
        </ul>
      </div>
    )
  };
};

export default RecipesContainer;
