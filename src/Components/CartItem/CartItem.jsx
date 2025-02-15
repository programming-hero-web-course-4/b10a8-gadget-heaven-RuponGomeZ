const CartItem = ({ products }) => {
    return (
        <div className="pt-7 mt-24 mb-8 mx-auto container">
            {products.map(product => (
                <div key={product.id} className="">
                    <div className="flex gap-20 bg-gray-100 p-5 rounded-2xl mb-8">
                        <div>
                            <img className="w-36 rounded-xl" src={product.image} alt={product.title} />
                        </div>
                        <div className=" flex flex-col justify-around">
                            <h2 className="font-bold">{product.title}</h2>
                            <p>{product.desc}</p>
                            <p className="font-bold">Price:$ {product.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;