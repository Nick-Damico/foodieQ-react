import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { googleSignOut, signOut } from "../../actions";

class SignOutButton extends Component {
  componentDidMount() {
    if (window.gapi.auth2) {
      this.auth = window.gapi.auth2.getAuthInstance();
    }
  }

  signOut = () => {
    if (this.auth) {
      this.auth.signOut();
      this.props.googleSignOut();
    } else {
      this.props.signOut();
    }
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
  { googleSignOut, signOut }
)(SignOutButton);
