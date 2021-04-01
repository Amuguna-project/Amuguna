import React from "react";
import "./Login.css";

const LoginApp = () => {
  return (
    <div className="accounts_login">
      <div className="form_login">
        <form>
          <div className="form_head">
            <h2 className="tit">LOGIN</h2>
          </div>

          <div className="login_form">
            <input
              type="text"
              className="form_input form_id"
              placeholder="아이디"
            />
            <input
              type="password"
              className="form_input form_pw"
              placeholder="비밀번호"
            />
          </div>

          <div className="accounts_search">
            <span>계정이 기억이 안나세요??</span>

            <div className="search_tag">
              <a href={() => false}>아이디찾기</a>
              <span className="bar">|</span>
              <a href={() => false}>비밀번호 찾기</a>
            </div>
          </div>

          <div className="login_submit">
            <button type="submit" className="login_btn">
              로그인
            </button>
          </div>
        </form>
        <div className="join_submit">
          <a href={() => false} className="join_href">
            회원가입
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginApp;
