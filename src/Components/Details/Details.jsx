import { useLoaderData, useParams } from "react-router-dom";
import CommonBanner from "../CommonBanner/CommonBanner";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { ToastContainer } from 'react-toastify';
import { addTostoredCartList, addToWishlist, getStoredCartList, getWishList } from "../addToDb";
import { useEffect, useState } from "react";

const Details = () => {
    const { id } = useParams();
    const products = useLoaderData();
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
    const intId = parseInt(id);

    const displayProduct = products.find(product => product.id === intId);
    const { title, price, rating, desc, specs, image } = displayProduct;

    useEffect(() => {
        const cartItems = getStoredCartList();
        if (cartItems.includes(displayProduct.id)) {
            setIsAddedToCart(true);
        }
        const wishlistItems = getWishList();
        if (wishlistItems.includes(displayProduct.id)) {
            setIsAddedToWishlist(true);
        }
    }, [displayProduct.id]);

    const handleAddToCart = (cart) => {
        addTostoredCartList(cart.id);
        setIsAddedToCart(true);
    }

    const handleAddToWishlist = (product) => {
        addToWishlist(product.id);
        setIsAddedToWishlist(true);
    }

    return (
        <div>
            <div className="">
                <CommonBanner title={'Product Details'} description={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></CommonBanner>
            </div>

            <div className="w-[900px] bg-white h-[450px] mx-auto p-5 -mt-20 rounded-2xl border relative z-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="w-60 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p className="font-bold">Price: ${price}</p>
                        <p className="py-6">{desc}</p>
                        <h4 className="font-bold">Specification:</h4>
                        <div className="grid grid-cols-1 gap-2">
                            {specs.map((spec, index) => (
                                <p key={index}>{spec}</p>
                            ))}
                        </div>
                        <h5 className="font-bold mt-3">Rating</h5>
                        <div className="flex gap-5">
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                            </div>
                            <p>{rating}</p>
                        </div>
                        <div className="flex gap-6 mt-5">
                            <button
                                onClick={() => handleAddToCart(displayProduct)}
                                className="btn btn-primary border-none bg-[#9538E2]"
                                disabled={isAddedToCart}
                            >
                                {isAddedToCart ? 'Added to Cart' : 'Add To Cart'}
                                <div className={`hover:cursor-pointer border bg-white rounded-full text-black p-1 ${isAddedToCart ? 'opacity-50 cursor-not-allowed' : ''}`} style={{ fontSize: '24px' }}>
                                    <TiShoppingCart />
                                </div>
                            </button>
                            <div
                                onClick={() => handleAddToWishlist(displayProduct)}
                                style={{ fontSize: '24px' }}
                                className={`hover:cursor-pointer border border-black bg-white my-auto rounded-full text-black p-1 ${isAddedToWishlist ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <CiHeart />
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Details;