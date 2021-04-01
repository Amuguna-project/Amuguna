import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="inner">
        <div className="left">
          <h1>
            <a href="">아무거나</a>
          </h1>
        </div>

        <ul className="game-list">

          <li>음식 사다리</li>

          <li>음식 룰렛</li>

          <li>음식 월드컵</li>
        </ul>

        <div>
        <ul className="accounts-list">
          <li>회원가입</li>
          <li>로그인</li> {/* 로그인 되면 여기에 개발자 소개 나오기 , 그룹생성, 그룹검색은 메인페이지 안에 */}
        </ul>
      </div>
      </div>
      
    </header>
  );
};

export default Header;
