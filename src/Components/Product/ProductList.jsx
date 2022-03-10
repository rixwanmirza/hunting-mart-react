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
        <ul className="product-list" id="productAppend">
            {data?.map((product) =>
                   <ProductGridView
                       product={product}
                   />
               )}
           </ul>

    )
}

export default ProductList
