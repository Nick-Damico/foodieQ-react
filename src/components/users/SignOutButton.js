import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { signOut } from "../../actions";

class SignOutButton extends Component {
  signOut = () => {
    if (window.gapi.auth2) {
      let instance = window.gapi.auth2.getAuthInstance();
      instance.signOut()
    }
    this.props.signOut();
  };

  render() {
    return (
      <Button className="google-button" onClick={this.signOut}>
        Sign Out
      </Button>
    );
  }
}

export default connect(
  null,
  { signOut }
)(SignOutButton);
