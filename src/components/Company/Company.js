import React from 'react';
import './Company.css'
const Company = props => {
    const{name,revenue,stock_market_cap,stock_sector,image,stock_symbol} = props.company;
    return (
        <div className='company-cart'>
            <img src={image} alt="" className='image' />
            <h3>Name: {name}</h3>
            <h3>Revenue: ${revenue}</h3>
            <p>Stock Market Cap: ${stock_market_cap}</p>
            <p>Stock Sector: {stock_sector}</p>
            <p>Stock Symbol: {stock_symbol}</p>

<button className='btn' onClick={()=>props.handleBuyStock(props.company)}><i class="fas fa-shopping-cart "></i>Buy Stock</button>
        </div>
    );
};

export default Company;