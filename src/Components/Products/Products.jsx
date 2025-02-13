import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    // console.log(products);

    return (
        <div className="pt-12">
            <h2 className="text-center text-4xl font-bold mb-24">Explore Cutting-Edge Gadgets</h2>
            <div className="flex mx-auto justify-center gap-8">
                <Categories products={products} ></Categories>
                <Product products={products}></Product>
            </div>
        </div>
    );
};

export default Products;