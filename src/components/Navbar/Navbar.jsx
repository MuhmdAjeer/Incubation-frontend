import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
        <div className='nav-bar'>
            <h1>Incubation</h1>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>Signup</li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Navbar;
