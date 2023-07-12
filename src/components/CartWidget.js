import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget() {
    return (
        <button className="btn btn-outline-light mr-3" style={{marginRight: '1rem'}}>
            <FaShoppingCart />
            <span className="ml-2">1</span>
        </button>
    )
}

export default CartWidget;
