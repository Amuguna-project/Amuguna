import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
        <div className="inner">
            <div className="left">
                <h1><a href="">아무거나</a></h1>
                <div className="search_container">
                    <form action="">
                        <label for="search"></label>
                        <input type="text" id="search" placeholder="검색" autocomplete="off" />
                        <button type="submit">
                            
                        </button>
                    </form>
                </div>
            </div>

        </div>
    </header>
  );
};

export default Header;
