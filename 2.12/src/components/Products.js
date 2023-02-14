import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { productAdd } from '../redux/productCounter/productActions';

const productsInfo = [
    {
        id: 1,
        name: 'ASUS Vivobook X2314',
        stock: 20,
        price: 35500,
    },
    {
        id: 2,
        name: 'Dell E12354 18.5 Inch',
        stock: 35,
        price: 9300,
    },
    {
        id: 3,
        name: 'Canon Eos 4000 18MP',
        stock: 72,
        price: 36500,
    },
]

const Products = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    const productHandler = (value) => {
        dispatch(productAdd(value))
    }
    return (
        <div className='shadow-lg  border p-3'>
            {
                productsInfo.map((product) => <>
                    <div className='my-4 d-flex gap-5 align-items-center border p-4' key={product.id}>
                        <div>
                            <h1>{product.name}({product.stock}) </h1>
                            <h4>TK {product.price}</h4>
                        </div>
                        <div>
                            <Button onClick={() => productHandler(product)}
                                disabled={state?.items.find(s => s.id === product.id && s.quantity === product.stock)}> Add +</Button>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default Products;