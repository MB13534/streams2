import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

//the history object is passed by props by the router component
class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    //initialvalues is a special redux-form prop. Must match the Field names
    //this.props.stream will destructure the title and description and redux form will pick it up
    //StreamForm is wrapped by redux-form helper
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={{
            title: this.props.stream.title,
            description: this.props.stream.description,
          }}
        />
      </div>
    );
  }
}

//own props is a second variable in mapStateToProps, it has the props passed to the component(the history)
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
