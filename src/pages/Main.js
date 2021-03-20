import React from "react";
import "../components/css/main.css";
import { Link } from "react-router-dom";

const MainApp = () => {
  return (
    <div className="main-content">
      <div className="content-step1">
        <h2 className="food-tit">음식을 선택해주세요</h2>
        <div className="food-group">
          <ul className="food-category">
            <li className="group-name">
              <Link to="#">
                <span className="name">한식</span>
              </Link>
            </li>
            <li className="group-name">
              <Link to="#">
                <span className="name">중식</span>
              </Link>
            </li>
            <li className="group-name">
              <Link to="#">
                <span className="name">일식</span>
              </Link>
            </li>
            <li className="group-name">
              <Link to="#">
                <span className="name">양식</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainApp;
