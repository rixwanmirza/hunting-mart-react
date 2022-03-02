import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import Requests from "../Function/CRUD/Requests";
import ProductGridView from "../Components/Product/ProductGridView";


const ProductDetail=(props)=>{
    const [data, setData] = useState(undefined)
    let { id } = useParams();


    async function apiCall(){
        let getData= await  Requests.getRequest(`https://huntingmart.pk/api/v1/e-commerce/shop/single-product/${id}`);
        setData(getData.data.product);
    }
    useEffect(() => {
       apiCall();
        },[]
    )


    if (data==undefined) return <h1>loading</h1>

    return(
            <section className="section">
                <div className="container detail-popup">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={data.image} />
                        </div>
                        <div className="col-md-6">
                            <div className="product-description">
                                <h1>{data.name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}

export default ProductDetail;
