import React from "react";
import { connect } from "react-redux";

//the history object is passed by props by the router component
const StreamEdit = (props) => {
  return (
    <div>
      {props.stream.title}
      {props.stream.description}
    </div>
  );
};

//own props is a second variable in mapStateToProps, it has the props passed to the component(the history)
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps)(StreamEdit);
