import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import React, { useState, useRef } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Tooltip, Overlay } from 'react-bootstrap';



function CartWidget() {
    const navigate = useNavigate(); // Obtiene la función navigate
    const { getCartItemCount } = useCart();
    const cartCount = getCartItemCount();

    const [showTooltip, setShowTooltip] = useState(false);
    const target = useRef(null);

    const handleCartClick = () => {
        navigate('/cart'); // Navega a la página del carrito
    };

    return (
        <>
            <button 
                className="btn btn-outline-light mr-3" 
                style={{marginRight: '1rem'}}
                onClick={handleCartClick}
                ref={target}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <FaShoppingCart />
                <span className="ml-2">{cartCount}</span>
            </button>
            <Overlay target={target.current} show={showTooltip} placement="bottom">
                {(props) => (
                    <Tooltip id="cart-tooltip" {...props}>
                        Ver carrito de compras
                    </Tooltip>
                )}
            </Overlay>
        </>
    );
}

export default CartWidget;
