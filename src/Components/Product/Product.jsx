import { useEffect, useState } from "react";
import ProductContainer from "../ProductContainer/ProductContainer";


const Product = ({ products }) => {

    // console.log(products);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-24">
            {
                products.slice(0, 9).map(product => <ProductContainer product={product} key={product.id}></ProductContainer>)
            }
        </div>
    );
};

export default Product;