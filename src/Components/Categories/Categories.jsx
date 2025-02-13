

const Categories = ({ products }) => {
    // const categories = products.map(product => product.category);
    // console.log(categories);

    return (
        <div className="flex flex-col gap-4 bg-slate-100 h-full p-7 rounded-xl">
            <button className="btn btn-outline bg-gray-300 rounded-full">All Product</button>
            <button className="btn btn-outline bg-gray-300 rounded-full">Laptops</button>
            <button className="btn btn-outline bg-gray-300 rounded-full">Phones</button>
            <button className="btn btn-outline bg-gray-300 rounded-full">Accessories</button>
            <button className="btn btn-outline bg-gray-300 rounded-full">Smart Watches</button>
            <button className="btn btn-outline bg-gray-300 rounded-full">MacBook</button>
            <button className="btn btn-outline bg-gray-300 rounded-full">Iphone</button>
            {/* {
                categories.map(category => <Category category={category}></Category>)
            } */}
        </div>
    );
};

export default Categories;