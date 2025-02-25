const Categories = ({ products, selectedCategory, handleSetCategory }) => {
    const changeCategory = category => {
        handleSetCategory(category);
    };

    // Extract unique categories from products
    const uniqueCategories = ['All Product', ...new Set(products.map(product => product.category))];

    return (
        <div className="flex flex-col gap-4 bg-slate-100 h-full p-7 rounded-xl">
            {uniqueCategories.map((category, index) => (
                <button
                    key={index}
                    className={`btn btn-outline rounded-full ${selectedCategory === category ? 'bg-black text-white' : 'bg-gray-300'}`}
                    onClick={() => changeCategory(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;