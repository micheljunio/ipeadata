import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import App from "./components/App";
import "./css/index.css";

    
class Root extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/:id/:submenu/:submenu2/:submenu3/:submenu4/:submenu5" component={App} />
          <Route exact path="/:id/:submenu/:submenu2/:submenu3/:submenu4" component={App} />
          <Route exact path="/:id/:submenu/:submenu2/:submenu3" component={App} />
          <Route exact path="/:id/:submenu/:submenu2" component={App} />          
          <Route exact path="/:id/:submenu" component={App} />          
          <Route exact path="/:id"component={App} />
          
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));