import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { googleSignOut } from "../../actions";

class SignOutButton extends Component {
  componentDidMount() {
    this.auth = window.gapi.auth2.getAuthInstance();
  }

  signOut = () => {
    if(this.auth.isSignedIn.get()){
      this.auth.signOut();
    }
    this.props.googleSignOut();
  };

  render() {
    return (
        <Button onClick={this.signOut}>
          Sign Out
        </Button>
    );
  };
};

export default connect(
  null,
  { googleSignOut }
)(SignOutButton);
