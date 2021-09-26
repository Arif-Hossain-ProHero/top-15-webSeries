import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let totalAdded = 0;
    let totalBudget = 0;
    let totlaBudgetDisplay = '0';
    let suffix = '';
    let moviesAdded = [];
    console.log(props);
    for (const movie of props.cart) {
        totalAdded = totalAdded + 1;
        totalBudget = parseFloat(totalBudget + movie.budget);
        // convert million to billion
        if (totalBudget < 1000) {
            totlaBudgetDisplay = totalBudget;
            suffix = 'Million'
        }
        else {
            totlaBudgetDisplay = parseFloat((totalBudget / 1000).toFixed(3));
            suffix = 'Billion';
        }
        //creating an object containing movie id and name
        const obj = {};
        obj.id = movie.id;
        obj.name = movie.name;
        moviesAdded.push(obj);
    }
    return (
        <div className='cart-container'>
            <h5 className='total-added'>Total Movie Added: <span>{totalAdded}</span></h5>
            <h5 className='total-budget'>Total Budget: <span>${totlaBudgetDisplay} {suffix}</span></h5>
              {
                moviesAdded.map(movie =>
                    <p className='added-movie'
                        key={movie.id}>
                        {movie.name}
                        <span className='delete-btn'>&times;</span>
                    </p>
                )
            }
        </div>
    );
};

export default Cart;