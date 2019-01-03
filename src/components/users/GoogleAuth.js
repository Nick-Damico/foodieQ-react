import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { signIn, signOut, logInGoogleUser } from "../../actions";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      const user = this.auth.currentUser.get();
      this.props.signIn(user);
      this.props.logInGoogleUser(user);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  render() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <span>
            Your are signed In{" "}
            <Button onClick={this.onSignOutClick}>Sign Out</Button>
          </span>
        </div>
      );
    }

    return (
      <Button onClick={this.onSignInClick} color="danger">
        Login with Google
      </Button>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userEmail: state.auth.userEmail
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut, logInGoogleUser }
)(GoogleAuth);
