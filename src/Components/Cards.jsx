import React, { use } from 'react';
import Card from './card';

const Cards = ({dataPromise, cartItems,setCartItems}) => {
    const productTools=use(dataPromise);

    return (
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-10">
            {
            productTools.map(product=><Card key={product.id} product={product} cartItems={cartItems} setCartItems={setCartItems}/>)
            }
        </div>
    );
};

export default Cards;