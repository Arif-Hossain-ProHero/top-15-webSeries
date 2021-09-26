import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container container-fluid'>
            <h1><span className='span-color'>Top 15</span> popular Web & TV series</h1>
            <p>According to IMDb, these are the best TV shows of all time. From fantasy like Game of Thrones, to comedy like Entourage... You can pick your Favourite one. </p>
            <h3>Your Budget is: 4.0 Billion</h3>
        </div>
    );
};

export default Header;