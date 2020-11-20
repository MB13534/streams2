//there is a script tag in index.html that gives us access to the google api
//gapi starts with just a load function, run gapi.load('client:auth2') for more access
//next we must initialize with our OAuth client id. gapi.client.init({ clientId: 'clientId' })
//oAuth client ID 994753246441-hgdpnslj1plukeb8gu5b3gm3c18orgvi.apps.googleusercontent.com

import React, { Component } from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
  //loads up the gapi client and initializes the auth instance
  componentDidMount() {
    //gapi.load must take a callback function that triggers once client is loaded
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "994753246441-hgdpnslj1plukeb8gu5b3gm3c18orgvi.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          //when the page first loads, this gets the sign-in status of the user
          this.onAuthChange(this.auth.isSignedIn.get());

          //sets an event listener that responds when the sign-in status changes
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  //when the listen callback gets triggered, it sends the event with the status true or false
  onAuthChange = (isSignedIn) => {
    const userId = this.auth.currentUser.get().getId();
    isSignedIn ? this.props.signIn(userId) : this.props.signOut();
  };

  //event listener on the signout button, triggers action
  onSignOutClick = () => {
    this.auth.signOut();
  };

  //event listener on the signin button, triggers action
  onSignInClick = () => {
    this.auth.signIn();
  };

  renderAuthButton() {
    //determines which button to show and puts event listeners on it
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else if (this.props.isSignedIn === false) {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In With Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
