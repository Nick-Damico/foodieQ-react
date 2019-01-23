import React from 'react';
import { Jumbotron } from 'reactstrap';

const WelcomePage = (props) => {
  return(
    <Jumbotron>
      <h2 className="display-3">Welcome back to FoodieQ</h2>
      <p className="lead">
        The webs Best community-driven recipe sharing and blogging platform.
      </p>
    </Jumbotron>
  );
};

export default WelcomePage;
