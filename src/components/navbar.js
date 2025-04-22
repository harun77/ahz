import React from 'react';
import './navbar.css';
import { FaChevronDown } from 'react-icons/fa';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img className="logo" src={require('../assets/logo.png')} alt="logo" />
            </div>
            <div className="navbar-actions">
                <div className="logout">
                    <img src={require('../assets/logo.png')} alt="logo" />
                    <span>Admin</span>
                    <FaChevronDown />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
