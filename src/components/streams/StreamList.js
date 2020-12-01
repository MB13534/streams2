import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStreams } from "../../actions";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  onEditClick = () => {
    console.log("edit");
  };

  onDeleteClick = () => {
    console.log("delete");
  };

  buttonRender = (stream) => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div>
          <button onClick={this.onEditClick}>Edit</button>
          <button onClick={this.onDeleteClick}>Delete</button>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
          {this.buttonRender(stream)}
        </div>
      );
    });
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
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
