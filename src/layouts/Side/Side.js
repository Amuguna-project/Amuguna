import React from "react";
import "./Side.css";

const Side = () => {
  return (
    <div id="side">
      <div className="side-head">
        <div className="tit">이도현</div>
      </div>

      <div className="side-menu side-group">
        <div className="tit">
          <span>내 그룹</span>
        </div>
        <ul>
          <li>은행팸</li>
          <li>인천대18</li>
          <li>배곧유치원</li>
        </ul>
      </div>

      <div className="side-menu recent-ate">
        <div className="tit">
          <span>최근에 먹은 것</span>
        </div>
        <ul>
          <li>피자</li>
          <li>햄버거</li>
          <li>스테이크</li>
          <li>토스트</li>
          <li>물</li>
        </ul>
      </div>
    </div>
  );
};

export default Side;
