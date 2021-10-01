import React from 'react';
import logo from '../images/logo2.png'
import './Header.css';

function Header() {
    return (
        <div className="header">
            
            <img className="logo" src={logo} alt="" srcset="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>

            
        </div>
    );
}

export default Header;
