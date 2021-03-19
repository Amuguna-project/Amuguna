import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FooterApp from "./components/Footer";
import HeaderApp from "./components/Header";
import MainApp from "./pages/Main";
import "./common.css";
import LoginApp from "./pages/Login";

function App() {
  return (
    <Router>
      <HeaderApp />
      <div id="main">
        <div id="content">
          <Route exact path="/" component={MainApp} />
          <Route path="/login" component={LoginApp} />
        </div>
      </div>
      <FooterApp />
    </Router>
  );
}

export default App;
