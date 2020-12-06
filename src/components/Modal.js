import React from "react";
import ReactDOM from "react-dom";

//This is a portal, render an element to a tag in html
const Modal = ({ title, content, actions, onDismiss }) => {
  return ReactDOM.createPortal(
    <div onClick={onDismiss} className="ui dimmer modals visible active">
      <div
        //e.stopPropagation prevents the event bubbling from the other div click event
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
