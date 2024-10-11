import React, { useState } from 'react';
import "./Header.css";
import logo from "../images/logo.png";
import searchIcon from "../images/search.png"; // 아이콘 이미지 경로

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <header className="header">
      <nav className="container">
        <div className='logo'>
          <a href='/main'>
            <img src={logo} alt='logo' />
          </a>
        </div>
        <div className='search-bar'>
          <input
            className="search-input-text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch} className="search-button">
            <img src={searchIcon} alt="Search" className="search-icon" /> {/* 아이콘 이미지 추가 */}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
