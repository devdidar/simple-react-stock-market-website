
import React,{ useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import   '../Companies/Companies.css';
import Company from '../Company/Company'

const Companies = () => {
    const [companies,setCompanies] = useState([])
    const [cart,setCart]  = useState([])
    useEffect(()=>{
        fetch('./company-data.json')
        .then(res=>res.json())
        .then(data=> setCompanies(data))
    },[])
const handleBuyStock = company=>{
    const newCart = [...cart,company]
    setCart(newCart)
}
    return (
        <div className='companies'>
            <div className="companies-container">
            {
companies.map(company=> <Company  
    key={company.id} 
    company={company}
    handleBuyStock={handleBuyStock}
    >
    </Company>)
            }
            </div>
          <div className="cart">
              <Cart cart={cart}></Cart>
          </div>
        </div>
     
    );
};

export default Companies;