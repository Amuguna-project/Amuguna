import React from "react";
import "./GroupsNav.css";

const GroupsNav = () => {
  return (
    <div className="groups-nav">
      <ul className="groups-nav-list">
        <li>
            <a href={() => false}>전체 보기</a>
        </li>
        <li>
            <a href={() => false}>내 그룹</a>
        </li>
        <li>
            <a href={() => false}>그룹 생성</a>
        </li>
      </ul>
    </div>
  );
};

export default GroupsNav;
