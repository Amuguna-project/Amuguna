import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="inner">
        <div className="left">
          <h1>
            <Link to="/">아무거나</Link>
          </h1>
        </div>

        <ul className="game-list">
          <li>음식 사다리</li>

          <li>음식 룰렛</li>

          <li><Link to="/choosefoodmain"> 음식 월드컵</Link></li>

          <li><Link to="/groups"> 전체 그룹 보기</Link></li>
        </ul>

        

        <div>
          <ul className="accounts-list">
            <li><Link to="/join"> 회원가입</Link></li>
            <li><Link to="/login"> 로그인</Link></li>
            {/* 로그인 되면 여기에 개발자 소개, 내 그룹 나오기 */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
