//since we have to do programatic routing, we are no longer going to
//create a browser router, we are going to make a plain router
//We are doing this so we can create our own broswer history so we have
//easy access to the history and the ability to do programatic routing

//just by exporting the function, the history object will be created

//the history package was installed with react-router-dom
import { createBrowserHistory } from "history";

export default createBrowserHistory();
