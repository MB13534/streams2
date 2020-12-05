import React from "react";
import { Router, Route } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./header/Header";
import history from "../history";

//since we have to do programatic routing, we are no longer going to
//create a browser router, we are going to make a plain router
//We are doing this so we can create our own broswer history so we have
//easy access to the history and the ability to do programatic routing

//when we pass a prop to the router called history, the browser will attempt to
//use it instead of the default
const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </>
      </Router>
    </div>
  );
};

export default App;
