import React, {useEffect, useState } from "react";

const CartDropdown=(props)=>{
    const [activeCart, setactiveCart] = useState(false);
    const handleToggle=() => {
        setactiveCart(!activeCart);
    };

    return(
        <div className={`cart-box ${activeCart ? "cart-active" : ""}`}>
            <a href="#" onClick={handleToggle}>
                <i className="fal fa-shopping-cart"></i>
                <span className="counter">0</span>
            </a>
        </div>
    )
}

export default CartDropdown;
