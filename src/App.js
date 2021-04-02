import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainApp from "pages/Main/Main";
import "App.css";
import LoginApp from "pages/Login/Login";
import GroupsApp from "pages/Groups/Groups";
import Header from "layouts/Header/Header";
import Side from "layouts/Side/Side";
import Join from "pages/Join/Join";

function App() {
  return (
    <Router>
      <Header />
      <Side />
      <div id="main">
        <div id="content">
          <Route exact path="/" component={MainApp} />
          <Route path="/login" component={LoginApp} />
          <Route path="/join" component = {Join} />
          <Route path="/groups" component={GroupsApp} />
        </div>
      </div>
    </Router>
  );
}

export default App;
