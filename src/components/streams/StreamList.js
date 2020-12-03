import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStreams } from "../../actions";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  onEditClick = (stream) => {
    console.log("EDIT");
    console.log(stream);
  };

  onDeleteClick = (stream) => {
    console.log("DELETE");
    console.log(stream);
  };

  onCreateClick = () => {
    console.log("CREATE");
  };

  renderAdmin = (stream) => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button
            className="ui button primary"
            onClick={() => this.onEditClick(stream)}
          >
            Edit
          </button>
          <button
            className="ui button negative"
            onClick={() => this.onDeleteClick(stream)}
          >
            Delete
          </button>
        </div>
      );
    }
  };

  renderCreateButton = () => {
    if (this.props.isSignedIn) {
      return (
        <div>
          <button onClick={this.onCreateClick}>Create Stream</button>
        </div>
      );
    }
  };

  renderList = () => {
    return (
      <>
        {this.props.streams.map((stream) => {
          return (
            <div className="item" key={stream.id}>
              {this.renderAdmin(stream)}
              <i className="large middle aligned icon camera" />
              <div className="content">
                {stream.title}
                <div className="description">{stream.description}</div>
              </div>
            </div>
          );
        })}
        {this.renderCreateButton()}
      </>
    );
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
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
