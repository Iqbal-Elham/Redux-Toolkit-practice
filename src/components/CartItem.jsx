import React from 'react';


const CartItem = ({ id, img, title, price, amount }) => {
    return (
        <>
        <div className='my-4 d-flex justify-content-around align-items-center '>
            <img className='border border-4 p-2 rounded-5' width='180' src={img} alt={title} />
            <h4>{title}</h4>
            <h5>{price}</h5>
            <button className='btn btn-warning p-2 text-light'>Remove</button>
            <div>
                <button className='btn btn-success py-1 px-3 w-100 '>+</button>
                <p>{amount}</p>
                <button className='btn btn-danger py-1 px-3 w-100 l'>-</button>
            </div>
        </div>
            <hr className='w-75 mx-auto' />
        </>
    );
}

export default CartItem;
