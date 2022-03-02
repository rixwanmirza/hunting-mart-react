import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import Requests from "../Function/CRUD/Requests";
import ProductGridView from "../Components/Product/ProductGridView";


const ProductDetail=(props)=>{
    // const [data, setData] = useState(undefined)
    let { id } = useParams();




    useEffect(() => {
            Requests.getRequest(`https://fakestoreapi.com/products/${id}`);
        },[]
    )


    // if (data==undefined) return <h1>loading</h1>

    return(
            <section className="section">
                <div className="container detail-popup">
                    <div className="row">
                        <div className="col-md-6">
                            {/*<img src={data.image} />*/}
                        </div>
                        <div className="col-md-6">
                            <div className="product-description">
                                {/*<h1>{data.title}</h1>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}

export default ProductDetail;
