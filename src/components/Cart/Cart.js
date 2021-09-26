import React from 'react';
import './Cart.css'
const Cart = props => {
    const{cart} = props;
    let total = cart.reduce( (prev,company) => (prev) + parseFloat(company.revenue), 0)
    return (
        <div className='cart-container'>
            <h3>Stock Added: {props.cart.length}</h3>
            <h4>Total Revenue: ${total.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;