import React from 'react';
import './Movie.css'

const Movie = (props) => {
    const {name, director, img, ratings, genre, stars, budget } = props.movie;
    return (
            <div className="card mb-3" style={{maxWidth: "310px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={img} className="rounded-start" alt="..." />
                    <div className='ratings-container'>
                        <p className='ratings'><i className="fas fa-star"></i>{ratings}</p>
                        <p className='play'><i className="far fa-play-circle"></i> Play trailer</p>
                    </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className='genre'>{genre}</p>
                            <p className='director'>Directed by: {director}</p>
                            <p className='stars'><span style={{color:'#212529'}}>Starring:</span> {stars}</p>
                        <p className='budget'>Budget: ${budget} Million</p>
                        <button onClick={()=>props.addBtnHandler(props.movie)} className='add-btn btn btn-primary'><i className="far fa-heart"></i>Add to Favourite</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Movie;