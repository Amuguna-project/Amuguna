import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "App.css";
import LoginApp from "pages/Login/Login";
import GroupsApp from "pages/Groups/Groups";
import Header from "layouts/Header/Header";
import Side from "layouts/Side/Side";
import Join from "pages/Join/Join";
import ChooseFoodMain from "pages/ChooseFoodMain/ChooseFoodMain";
import Main from "pages/Main/Main";

function App() {
  return (
    <Router>
      <Header />
      <Side />
      <div id="main">
        <div id="content">
          <Route exact path="/" component={Main} />
          <Route path="/choosefoodmain" component={ChooseFoodMain} />
          <Route path="/login" component={LoginApp} />
          <Route path="/join" component={Join} />
          <Route path="/groups" component={GroupsApp} />
        </div>
      </div>
    </Router>
  );
}

export default App;
