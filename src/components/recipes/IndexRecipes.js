import './IndexRecipes.css';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { allRecipes } from "../../actions";

class Recipes extends Component {
 render() {
   return(
     <div>
      <h1>Recipes List</h1>
     </div>
   )
 }
};

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, { allRecipes })(Recipes);
