import React from "react";
import "./GroupsTable.css";

const GroupsTable = () => {
  return (
    <div className="groups-table">
      <div className="table-list">
        <table>
          <thead>
            <tr>
              <th style={{ width: "75%" }}>그룹 이름</th>
              <th style={{ width: "15%" }}>그룹장</th>
              <th style={{ width: "10%" }}>맴버 수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href={() => false}>이도현과 함께하는 먹거리 여행</a>
              </td>
              <td>
                <a href={() => false}>leeDoHyun</a>
              </td>
              <td>1/10</td>
            </tr>
            <tr>
              <td>
                <a href={() => false}>이도현과 함께하는 먹거리 여행</a>
              </td>
              <td>
                <a href={() => false}>leeDoHyun</a>
              </td>
              <td>1/10</td>
            </tr>
            <tr>
              <td>
                <a href={() => false}>이도현과 함께하는 먹거리 여행</a>
              </td>
              <td>
                <a href={() => false}>leeDoHyun</a>
              </td>
              <td>1/10</td>
            </tr>
            <tr>
              <td>
                <a href={() => false}>이도현과 함께하는 먹거리 여행</a>
              </td>
              <td>
                <a href={() => false}>leeDoHyun</a>
              </td>
              <td>1/10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupsTable;
