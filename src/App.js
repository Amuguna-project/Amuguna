import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainApp from "pages/Main/Main";
import "App.css";
import LoginApp from "pages/Login/Login";
import GroupsApp from "pages/Groups/Groups";

function App() {
  return (
    <Router>
      <div id="main">
        <div id="content">
          <Route exact path="/" component={MainApp} />
          <Route path="/login" component={LoginApp} />
          <Route path="/groups" component={GroupsApp} />
        </div>
      </div>
    </Router>
  );
}

export default App;
