import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='navbar'>
            <h1> NavBar </h1>
            <div className='links'>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/project'>Project</Link>
            </div>
        </div>
    );
};

export default NavBar;