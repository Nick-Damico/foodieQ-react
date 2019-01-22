import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { googleSignIn, googleSignOut, logInGoogleUser } from "../../actions";

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
      this.props.googleSignIn(user);
      this.props.logInGoogleUser(user);
    } else {
      this.props.googleSignOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  render() {
    const {isSignedIn, text} = this.props;
    if (isSignedIn) {
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
      <Button onClick={this.onSignInClick} size="lg" className="google-button" block>
        {text}
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
  { googleSignIn, googleSignOut, logInGoogleUser }
)(GoogleAuth);
