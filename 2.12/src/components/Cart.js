import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const state = useSelector((state) => state)
    console.log(state)
    return (
        <div className='shadow-lg  border p-3'>
            <div>
                <h1>Added Items</h1>
                {
                    // state.items.map((item) => <p>{item}</p>)
                }
                <div></div>
                <div className='text-center mt-5'>
                    <h3>Total Items</h3>
                    {/* <h1>{state.count}</h1> */}
                </div>
                <div className='text-center'>
                    <h3>Total Price</h3>
                    {/* <h1 >{state.price}</h1> */}
                </div>
            </div>
        </div>
    );
};

export default Cart;