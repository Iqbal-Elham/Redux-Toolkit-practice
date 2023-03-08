import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../feature/cart/cartSlice';


const CartItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch()
    return (
        <>
        <div className='my-4 d-flex justify-content-around align-items-center '>
            <img className='border border-4 p-2 rounded-5' width='180' src={img} alt={title} />
            <h4>{title}</h4>
            <h5>{price}</h5>
            <button className='btn btn-warning p-2 text-light' onClick={() => dispatch(removeItem(id, title))}>Remove</button>
            <div>
                <button className='btn btn-success py-1 px-3 w-100 ' onClick={() => dispatch(increase(id))}>+</button>
                <h4>{amount}</h4>
                <button className='btn btn-danger py-1 px-3 w-100 l' onClick={() => {
                    if(amount > 0){
                        dispatch(decrease(id));
                        return;
                    }
                }}>-</button>
            </div>
        </div>
            <hr className='w-75 mx-auto' />
        </>
    );
}

export default CartItem;
