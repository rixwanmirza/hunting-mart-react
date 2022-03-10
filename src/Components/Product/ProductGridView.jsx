import React, { useState } from "react";
import {Link} from "react-router-dom";


const ProductGridView=(props)=>{

    return(
        <li>
            <div className="product-box">
                <div className="img-box">
                    <a href={"/products/"+props.product.id}>
                        <img src={props.product.image} />
                    </a>
                </div>
                <div className="text-box">
                    <h2><Link to={"/products/"+props.product.id}>{props.product.name}</Link></h2>
                    <div className="price">$ {props.product.price}</div>
                    <div>Category: {props.product.sku.code}</div>
                </div>
            </div>
        </li>
    )
}



export default ProductGridView;
