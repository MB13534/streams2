//there is a script tag in index.html that gives us access to the google api
//gapi starts with just a load function, run gapi.load('client:auth2') for more access
//next we must initialize with our OAuth client id. gapi.client.init({ clientId: 'clientId' })
//oAuth client ID 994753246441-hgdpnslj1plukeb8gu5b3gm3c18orgvi.apps.googleusercontent.com

import React, { Component } from "react";

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "994753246441-hgdpnslj1plukeb8gu5b3gm3c18orgvi.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    return this.state.isSignedIn ? (
      <button>Sign Out</button>
    ) : (
      <button>Sign In</button>
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
