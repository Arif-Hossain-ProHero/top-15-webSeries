import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Movie from '../Movie/Movie';
import './Movies.css';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, []);
    // onClick button handler
    const addBtnHandler = movie => {
        const newCart = [...cart, movie];
        setCart(newCart);
    }
    return (
        <div className='main container-fluid'>
            <div className='movies-container'>
                {
                    movies.map(movie =>
                        <Movie
                            movie={movie}
                            key={movie.id}
                            addBtnHandler={addBtnHandler}
                        ></Movie>
                    )
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Movies;