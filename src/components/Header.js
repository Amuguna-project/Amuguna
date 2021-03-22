import React from "react";
import { Link } from "react-router-dom";

const HeaderApp = () => {
  return (
    <header className="layout-header">
      <div className="header-accounts-nav">
        <ul className="accounts-nav">
          <li className="menu-list">
            <Link to="/login" className="link_menu">
              로그인
            </Link>
          </li>
          <li className="menu-list">
            <Link to="/login" className="link_menu">
              회원가입
            </Link>
          </li>
        </ul>
      </div>

      <div className="header-tit">
        <h1 className="logo">아무거나</h1>
      </div>
    </header>
  );
};

export default HeaderApp;
