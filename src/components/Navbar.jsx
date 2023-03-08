import React from 'react';
import { useSelector } from 'react-redux';



const Navbar = () => {
    const { amount } = useSelector((store) => store.cart);

    return (
        <nav>
            <div className="d-flex justify-content-around align-items-center p-3 bg-primary text-light">
                <h3>Redux Toolkit</h3>
                <div className="nav-container">
                       <p className='h2'>Cart <span className='badge bg-warning p-1'>{ amount }</span></p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
