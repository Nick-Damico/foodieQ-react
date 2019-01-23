# FoodieQ React

![foodieq React app](./public/foodieq-logo.png)

FoodieQ React is the client interface to the FoodieQ Rails 5+ Api. The application is designed around letting users share their personal recipes, a place to keep a storage of their own recipes and to track new recipes they learn from other users. It's simply designed to be a community recipe sharing application.

Users are able to view and learn new recipes with out the need to sign up. But for users wanting a full experience of sharing and keeping track of other recipes they will need to sign up for the app. Application sign up is handled either with Google auth2 or native sign up using Devise, JWT gems.

FoodieQ React's technologies are
- Create React App
- React Router
- Redux
- Redux Forms
- React Strap(Bootstrap React Library)
- Thunk middleware
- Sass
- Google auth2
- JWT

FoodieQ's backend technology is built with Rails and you can read more about it (here)[https://github.com/Nick-Damico/foodieQ-API]

## System dependencies
- axios: ^0.18.0,
- bootstrap: ^4.2.1,
- react: ^16.7.0,
- react-dom: ^16.7.0,
- react-redux: ^6.0.0,
- react-router-dom: ^4.3.1,
- react-scripts: 2.0.5,
- reactstrap: ^6.5.0,
- redux: ^4.0.1,
- redux-thunk: ^2.3.0

## Install
  1. Make sure `Node` and `NPM` are installed on your system
  2. Download this repo or run `git clone https://github.com/Nick-Damico/foodieQ-react`
  3. cd into foodieQ-react directory
  4. execute in terminal `npm install`
  5. `npm start`
  6. visit http://localhost:3000/


## Todo List
- [X] Add Sign Up form to Modal
- [X] Add Sign Up button on Login Modal for Users that need that option
- [ ] Add Client Side Validations to Forms
- [X] Display Server Side error messages on unsuccessful Sign up or Login
- [X] Redirect to Logged In screen on Successful Sign up Login
- [ ] Implement CRUD operations for Recipes
- [ ] Finish Landing Page design to inform users of FoodieQ's functionality.


## How to run the test suite
  `npm test`

## Services (job queues, cache servers, search engines, etc.)

## Deployment instructions
