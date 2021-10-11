import React from 'react';


function CartButton ({cartButton, icon, onClick}) {
    return (
        <a onClick={onClick} className={`${className} cart-button`}>
            <i className={icon}/>
        </a>
    )
}

export default CartButton;