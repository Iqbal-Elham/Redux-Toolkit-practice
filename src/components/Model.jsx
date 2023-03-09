import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModel } from '../feature/model/modelSlice';
import { clearAll } from '../feature/cart/cartSlice';

const Model = () => {
    const dispatch = useDispatch()
    const style = {
        display:'flex',
        justifyContent:'Center',
        alignItems:'center',
        position:'relative',
        top: '20rem',
    }

    const handleClearAll = () => {
        dispatch(clearAll())
        dispatch(closeModel())
    }

    return (
        <div style={style}>
            <div class="alert alert-primary position-fixed " role="alert">
              <h4 class="alert-heading">Do you really want to remove the item?</h4>
              <hr />
              <div className='d-flex'>
                <button className='btn btn-danger' onClick={handleClearAll}>Confirm</button>
                <button className='btn btn-success' onClick={() => dispatch(closeModel())}>Not now</button>
            </div>
            </div>
        </div>
    );
}

export default Model;
