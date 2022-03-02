import React from "react";
import ProductList from "../Components/Product/ProductList";

const Home=(props)=>{
    return(
        <section className="section">
            <div className="container">
                <ProductList />
            </div>
        </section>
    )
}

export default Home;
