import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStreams } from "../../actions";

class StreamList extends Component {
  componentDidMount() {
    //fetch all streams from DB on load; action creator
    this.props.fetchStreams();
  }

  //helper function to create edit and delete buttons if the current user created the stream
  renderAdminButtons = (stream) => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link
            to={`/streams2-client/edit/${stream.id}`}
            className="ui button primary"
          >
            Edit
          </Link>
          <Link
            to={`/streams2-client/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  //helper function to make the create button, will only render if the user is signed in
  renderCreateButton = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams2-client/new" className="ui button black">
            Create New Stream
          </Link>
        </div>
      );
    }
  };

  renderList = () => {
    //map through all streams to render streams, links to individual buttons, and admin buttons if necessary
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdminButtons(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link className="header" to={`streams/${stream.id}`}>
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreateButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //turns object into an array
  const arr = Object.values(state.streams);
  return {
    streams: arr,
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
