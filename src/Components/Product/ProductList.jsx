import React, {useState, useEffect} from "react";
import ProductGridView from "./ProductGridView";
import Requests from "../../Function/CRUD/Requests";


const ProductList=()=>{
    const [data, setData] = useState(undefined)

    async function apicall(){
        let getData = await Requests.getRequest("https://huntingmart.pk/api/v1/e-commerce/shop/products-list");
        setData(getData.data);
    }

    useEffect(() => {
       apicall();
        },[]
    )


    return(
       <ul className="product-list">
           {data?.map((product) =>
               <ProductGridView
                   ProductUrl={`/products/${product.id}`}
                   ProductImageUrl={product.image}
                   ProductTitle={product.name}
                   ProductPrice={product.price}
                   ProductCategory={product.sku.code}
               />
           )}
       </ul>

    )
}

export default ProductList
