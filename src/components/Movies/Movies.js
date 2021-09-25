import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Movie from '../Movie/Movie';
import './Movies.css';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, []);
    return (
        <div className='container'>
            <div className='movies-container'>
                {
                    movies.map(movie =>
                        <Movie movie={movie} key={movie.id}></Movie>
                    )
                }
            </div>
            <div>
                <Cart></Cart>
           </div>
        </div>
    );
};

export default Movies;