import { Link } from "react-router-dom";



const ProductContainer = ({ product }) => {
    const { title, price, image, id } = product;
    // console.log(product.id);
    // console.log(product);

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
                        <Link to={`/details/${id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductContainer;