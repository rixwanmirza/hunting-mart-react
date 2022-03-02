import React, { useState } from "react";
import {Link} from "react-router-dom";


const ProductGridView=(props)=>{
    const [show, setShow] = useState(false);


    return(
        <li>
            <div className="product-box">
                <div className="img-box">
                    <a href={props.ProductUrl}>
                        <img src={props.ProductImageUrl} />
                    </a>
                </div>
                <div className="text-box">
                    <h2><Link to={props.ProductUrl}>{props.ProductTitle}</Link></h2>
                    <div className="price">$ {props.ProductPrice}</div>
                    <div>Category: {props.ProductCategory}</div>
                </div>
            </div>
        </li>
    )
}



export default ProductGridView;
