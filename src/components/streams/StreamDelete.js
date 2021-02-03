import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends Component {
  componentDidMount() {
    //runs action creator on currently selected stream incase page is reloaded
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <>
        <button
          //delete stream action creator when delete is pressed
          onClick={() => this.props.deleteStream(this.props.stream.id)}
          className="ui button negative"
        >
          Delete
        </button>
        {/* navigate back to home page if cancel is pressed */}
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  }

  renderContent() {
    //before the stream loads the notification lacks the title
    if (!this.props.stream) {
      return "Are you sure you want to delete the stream with title:";
    }
    //once the stream is loaded the title is added
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
  }

  render() {
    return (
      //modal is the full page notification
      <Modal
        title="Delete Stream"
        //what text/content should appear in the middle
        content={this.renderContent()}
        //two action buttons that should be sent as props
        actions={this.renderActions()}
        //the route when you click outside of the modal
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
