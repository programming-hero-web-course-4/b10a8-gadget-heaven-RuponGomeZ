import { Link } from "react-router-dom";

const ProductContainer = ({ product }) => {
    const { title, price, image, id } = product;

    return (
        <div className="flex text-center justify-center items-center my-auto">
            <div className="card card-compact bg-base-100 w-72 h-96 shadow-2xl">
                <figure>
                    <img className="min-h-52 max-h-52" src={image} alt={title} />
                </figure>
                <div className="card-body flex flex-col justify-center items-center">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: ${price}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/details/${id}`}>
                            <button className="btn outline-none border-[#9538E2] rounded-full text-[#9538E2]">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductContainer;