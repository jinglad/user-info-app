import React from 'react';
import "./Header.css";
const Header = () => {
    return (
        <div>
            <h1 className="site-title">User Information App</h1>
            <nav className="nav-bar">
                <a href="/home">Home</a>
                <a href="/friend-request">Friend Request</a>
                <a href="/notification">Notification</a>
            </nav>
        </div>
    );
};

export default Header;