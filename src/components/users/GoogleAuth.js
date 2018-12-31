import React, { Component } from "react";
import { Button } from "reactstrap";

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  };

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  render() {
    if (this.state.isSignedIn) {
      return (
        <div>
          <span>Your are signed In <Button onClick={this.onSignOut}>Sign Out</Button></span>
        </div>
      );
    };

    return <Button onClick={this.onSignIn} color="danger">Login with Google</Button>;
  }
}

export default GoogleAuth;
