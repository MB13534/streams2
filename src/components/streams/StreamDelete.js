import React from "react";

import Modal from "../Modal";
import history from "../../history";

const StreamDelete = () => {
  const actions = (
    <>
      <button
        onClick={() => console.log("left")}
        className="ui button negative"
      >
        Delete
      </button>
      <button onClick={() => history.push("/")} className="ui button">
        Cancel
      </button>
    </>
  );

  return (
    <div>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

export default StreamDelete;
