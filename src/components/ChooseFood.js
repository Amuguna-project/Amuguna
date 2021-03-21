import React from "react";

const koreaFood = [
  { id: 1, name: "한식1" },
  { id: 2, name: "한식2" },
  { id: 3, name: "한식3" },
  { id: 4, name: "한식4" },
];

const chinaFood = [
  { id: 1, name: "중식1" },
  { id: 2, name: "중식2" },
  { id: 3, name: "중식3" },
  { id: 4, name: "중식4" },
];

const japenFood = [
  { id: 1, name: "일식1" },
  { id: 2, name: "일식2" },
  { id: 3, name: "일식3" },
  { id: 4, name: "일식4" },
];

const americaFood = [
  { id: 1, name: "양식1" },
  { id: 2, name: "양식2" },
  { id: 3, name: "양식3" },
  { id: 4, name: "양식4" },
];

const koreaList = koreaFood.map((name) => <li key={name.id}>{name.name}</li>);

const chinaList = chinaFood.map((name) => <li key={name.id}>{name.name}</li>);

const japenList = japenFood.map((name) => <li key={name.id}>{name.name}</li>);

const americaList = americaFood.map((name) => (
  <li key={name.id}>{name.name}</li>
));

const ChooseFood = () => {
  return (
    <div className="food-list">
      <ul className="list">{koreaList}</ul>
    </div>
  );
};

export default ChooseFood;
