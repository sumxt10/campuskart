import React, { useState } from 'react';
import './Navbar.css';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import templogo from '../../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo-container">
            {/* Logo placeholder - add your image here */}
            <img src={templogo} alt="CampusSpot" className="logo" />
          </div>
          <div className="location-selector">
            <span>Location</span>
            <ChevronDown size={20} />
          </div>
        </div>

        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search for Colleges, Courses, Exams..."
            className="search-input"
          />
        </div>

        <div className="navbar-right">
          <button className="nav-button review-button">Write a Review</button>
          <button className="nav-button explore-button">Explore College</button>
          <button className="nav-button join-button">Join Us</button>
        </div>

        <div className="mobile-menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-search">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search for Colleges, Courses, Exams..."
              className="search-input"
            />
          </div>
          <div className="mobile-buttons">
            <button className="nav-button review-button">Write a Review</button>
            <button className="nav-button explore-button">Explore College</button>
            <button className="nav-button join-button">Join Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
