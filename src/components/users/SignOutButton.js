import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { googleSignOut } from "../../actions";

class SignOutButton extends Component {
  componentDidMount() {
    this.auth = window.gapi.auth2.getAuthInstance();
  }

  signOut = () => {
    debugger;
    this.auth.signOut();
    this.props.googleSignOut();
  };

  render() {
    return (
        <button onClick={this.signOut}>
          Sign Out
        </button>
    );
  };
};

export default connect(
  null,
  { googleSignOut }
)(SignOutButton);
