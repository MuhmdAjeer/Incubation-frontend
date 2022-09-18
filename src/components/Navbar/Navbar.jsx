import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
        <div className='nav-bar'>
            <h1>Incubation</h1>
            <div className="nav-links">
                <ul>
                    <li className='hover:text-gray-500 hover:cursor-pointer' >Home</li>
                    <li className='hover:text-gray-500 hover:cursor-pointer' >Signup</li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Navbar;
