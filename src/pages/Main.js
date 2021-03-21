import React, { useState } from "react";
import "../components/css/main.css";
import ChooseFood from "../components/ChooseFood";

const FoodCategory = [
  { id: 1, name: "한식" },
  { id: 2, name: "중식" },
  { id: 3, name: "일식" },
  { id: 4, name: "양식" },
];

const categoryList = FoodCategory.map((name) => (
  <li key={name.id} className="group-name">
    <span className="name">{name.name}</span>
  </li>
));

const MainApp = () => {
  return (
    <div className="main-content">
      <div className="content-step1">
        <h2 className="food-tit">음식을 선택해주세요</h2>
        <div className="food-group">
          <ul className="food-category">{categoryList}</ul>
        </div>
        <div className="content-step2">
          <ChooseFood />
        </div>
      </div>
    </div>
  );
};

export default MainApp;
