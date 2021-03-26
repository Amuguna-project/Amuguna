import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FooterApp from "./components/Footer";
import HeaderApp from "./components/Header";
import MainApp from "./pages/Main/Main";
import "./common.css";
import LoginApp from "./pages/Login/Login";
import GroupsApp from "./pages/Groups/Groups";

function App() {
  return (
    <Router>
      <HeaderApp />
      <div id="main">
        <div id="content">
          <Route exact path="/" component={MainApp} />
          <Route path="/login" component={LoginApp} />
          <Route path="/groups" component={GroupsApp} />
        </div>
      </div>
      <FooterApp />
    </Router>
  );
}

export default App;
