import React, {useState, useEffect} from "react";
import ProductGridView from "./ProductGridView";

const fetchUrl = "https://fakestoreapi.com/products";

const ProductList=(props)=>{
    const [data, setData] = useState()

    useEffect(() => {
        fetch(fetchUrl).then((res) => res.json() ).then((data) => setData(data))
        },[]
    )


    return(
       <ul className="product-list">
           {data?.map((product) =>
               <ProductGridView
                   ProductUrl={`/products/${product.id}`}
                   ProductImageUrl={product.image}
                   ProductTitle={product.title}
                   ProductPrice={product.price}
                   ProductCategory={product.category}
               />
           )}
       </ul>

    )
}

export default ProductList
