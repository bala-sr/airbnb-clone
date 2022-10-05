import React from 'react';
import { FaAirbnb, FaSearch, FaUserCircle } from 'react-icons/fa';
import { RiEqualizerLine } from 'react-icons/ri';
import { BiGlobe } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css';

function Navbar() {

  return (
    <>
        {/* Navbar for large screens */}
        <nav className="navbar-lg">
            <div className="navbar-lg-left">
                <FaAirbnb />
                <span className="brand-name">airbnb</span>
            </div>
            <div className="navbar-lg-center">
                <div className="navbar-lg-center-container">
                    <span>Anywhere</span>
                    <span>Any week</span>
                    <span className="add-guests">Add guests</span><FaSearch />
                </div>
            </div>
            <div className="navbar-lg-right">
                <span>Become a host</span>
                <BiGlobe />
                <div className="dropdown-icon">
                    <GiHamburgerMenu />
                    <FaUserCircle />
                </div>
            </div>
        </nav>
        {/* Navbar for medium screens */}
        <nav className="navbar-md">
            <div className="search-icon">
                <FaSearch />
            </div>
            <div className="where-to">
                <span>Where to?</span>
                <div className="filters">
                    <span className="anywhere">Anywhere</span>
                    <span className="anyweek">Any week</span>
                    <span className="anyguests">Add guests</span>
                </div>
            </div>
            <div className="equalizer-icon">
                <RiEqualizerLine />
            </div>
        </nav>
    </>
  )
}

export default Navbar;