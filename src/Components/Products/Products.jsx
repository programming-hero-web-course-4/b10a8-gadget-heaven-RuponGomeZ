import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Product');

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            });
    }, []);

    const handleSetCategory = category => {
        setSelectedCategory(category);
        handleFilteredProduct(category);
    };

    const handleFilteredProduct = (category) => {
        if (category === 'All Product') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className="pt-12">
            <h2 className="text-center text-4xl font-bold mb-24">Explore Cutting-Edge Gadgets</h2>
            <div className="flex mx-auto justify-center gap-8">
                <Categories
                    handleSetCategory={handleSetCategory}
                    products={products}
                    selectedCategory={selectedCategory}
                />
                <Product products={filteredProducts} />
            </div>
        </div>
    );
};

export default Products;