import React, {useEffect, useState} from "react";
import { useParams, Link } from 'react-router-dom'
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
                                <p>{data.caption}</p>
                                <div className="price">
                                    <del className="text-muted">Rs.{data.regular_price}</del>
                                    {data.price}
                                </div>
                                <div className="mb-3">
                                    <b className="text-medium">Categories: </b>
                                    {data.categories}
                                    {/*{data.categories?.map((category) =>*/}
                                    {/*    <a href="">{category}</a>*/}
                                    {/*)}*/}
                                </div>
                                <div className="tags mb-3">
                                    <b className="text-medium">Tags: </b>
                                    {data.tags?.map((tag) =>
                                        <a href="#">{tag},</a>
                                    )}
                                </div>
                                <div className="description">
                                    <b>Description</b>
                                    <div dangerouslySetInnerHTML={{ __html: data.description }} />
                                </div>

                                {/*{data.description}*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}

export default ProductDetail;
