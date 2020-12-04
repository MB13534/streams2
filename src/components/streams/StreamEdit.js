import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStream } from "../../actions";

//the history object is passed by props by the router component
class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {this.props.stream.title}
          {this.props.stream.description}
        </div>
      );
    }
  }
}

//own props is a second variable in mapStateToProps, it has the props passed to the component(the history)
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
