import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { googleSignIn, signOut, logInGoogleUser } from "../../actions";

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
      this.props.googleSignIn();
      this.props.logInGoogleUser(user);
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  render() {
    const {text} = this.props;
    return (
      <Button onClick={this.onSignInClick} size="lg" className="google-button" block>
        {text}
      </Button>
    );
  }
}

const mapStateToProps = state => {
  return {
    userEmail: state.auth.userEmail
  };
};

export default connect(
  mapStateToProps,
  { googleSignIn, signOut, logInGoogleUser }
)(GoogleAuth);
