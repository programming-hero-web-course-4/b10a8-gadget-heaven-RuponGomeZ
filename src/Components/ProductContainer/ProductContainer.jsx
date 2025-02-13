


const ProductContainer = ({ product }) => {
    const { title, price, image } = product;
    // console.log(product.id);

    return (
        <div>
            <div className="card card-compact bg-base-100 w-72 shadow-2xl">
                <figure>
                    <img className="w-40"
                        src={image}
                        alt={title} />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductContainer;