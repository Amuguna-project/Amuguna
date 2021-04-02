import React from "react";
import "./Join.css";

const Join = () => {
  return (
    <div className="accounts_join">
      <div className="form_join">
        <form action="" method="POST">
          <div className="form_head">
            <h2 className="tit">JOIN</h2>
          </div>

          <table className="form_table">
            <tbody>
              <tr className="join_id">
                <th>아이디</th>
                <td>
                  <input
                    type="text"
                    className="form_input form_id"
                    placeholder="아이디를 입력해주세요"
                  />
                  <a className="btn">중복확인</a>
                  <p className="use_check">
                    <span className="req case1">
                      6자 이상의 영문 혹은 영문과 숫자를 조합
                    </span>
                    <span className="req case2">아이디 중복확인</span>
                  </p>
                </td>
              </tr>

              <tr className="join_pw">
                <th>비밀번호</th>
                <td>
                  <input
                    type="password"
                    className="form_input form_pw"
                    placeholder="비밀번호를 입력해주세요"
                  />
                  <p className="use_check">
                    <span className="req case1">8자 이상 입력해주세요</span>
                    <span className="req case2">
                      영문+숫자+특수문자(-제외) 를 조합
                    </span>
                  </p>
                </td>
              </tr>

              <tr className="join_pw2">
                <th>비밀번호 확인</th>
                <td>
                  <input
                    type="password"
                    className="form_input form_pw2"
                    placeholder="비밀번호를 다시 입력해주세요"
                  />
                  <p className="use_check">
                    <span className="req case1">
                      동일한 비밀번호를 입력해주세요
                    </span>
                  </p>
                </td>
              </tr>

              <tr className="join_email">
                <th>이메일</th>
                <td>
                  <input
                    type="text"
                    className="form_input form_email"
                    placeholder="이메일을 입력해주세요"
                  />
                  <a className="btn">중복확인</a>
                  <p className="use_check">
                    <span className="req case1">이메일 중복확인</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="join_submit">
            <button type="submit" className="join_btn">
              가입하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Join;
