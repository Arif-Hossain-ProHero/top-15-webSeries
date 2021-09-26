import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container container-fluid'>
            <h1><span className='span-color'>Top 15</span> popular Web & TV series</h1>
            <p>Here you will find top Web series</p>
            <h3>Your Budget is: 4.0 Billion</h3>
        </div>
    );
};

export default Header;