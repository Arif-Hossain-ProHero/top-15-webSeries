import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let totalAdded = 0;
    let totalBudget = 0;
    let totlaBudgetDisplay = '0';
    let suffix = '';
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
    }
    return (
        <div className='cart-container'>
            <h5>Total Movie Added: {totalAdded}</h5>
            <h5>Total Budget: ${totlaBudgetDisplay} {suffix}</h5>
        </div>
    );
};

export default Cart;