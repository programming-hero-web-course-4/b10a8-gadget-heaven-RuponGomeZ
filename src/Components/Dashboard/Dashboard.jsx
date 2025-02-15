import { useState, useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import CommonBanner from "../CommonBanner/CommonBanner";
import { getStoredCartList, getWishList } from "../addToDb";


const Dashboard = () => {

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setProducts] = useState();
    const [activeButton, setActiveButton] = useState('cart');

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                const cartStoredItem = getStoredCartList();
                const initialFilteredItems = filterLocalStorage(data, cartStoredItem);
                setFilteredProducts(initialFilteredItems);
            });
    }, []);

    const wishListStoredItem = getWishList();
    const cartStoredItem = getStoredCartList();

    const filterLocalStorage = (products, cartStoredItem) => {
        const filteredItems = products.filter(product => cartStoredItem.includes(product.id));
        return filteredItems;
    }


    const handleFilterCart = () => {
        const filteredItems = filterLocalStorage(products, cartStoredItem);
        setFilteredProducts(filteredItems);
        setActiveButton('cart');
    }

    const handleFilterWishlist = () => {
        const filteredItems = filterLocalStorage(products, wishListStoredItem);
        setFilteredProducts(filteredItems);
        setActiveButton('wishlist');
    }


    return (
        <div>
            <CommonBanner title={"Dashboard"} description={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></CommonBanner>

            <div className="text-white relative z-10 -mt-20 text-center">
                <button onClick={() => handleFilterCart(products, cartStoredItem)} className={`border-white btn ${activeButton === 'cart' ? 'bg-white text-black' : 'bg-transparent text-white'} rounded-full w-32 mr-5 border-solid`}>Cart</button>
                <button onClick={() => handleFilterWishlist(products, wishListStoredItem)} className={`border-white btn ${activeButton === 'wishlist' ? 'bg-white text-black' : 'bg-transparent text-white'} rounded-full w-32 mr-5 border-solid`}>Wishlist</button>
            </div>
            <div className="flex pt-24 text-center justify-center gap-40 pr-40 items-center">
                <h2>Cart</h2>
                <div className="flex gap-32 justify-center text-center items-center">
                    <h2>Total cost:</h2>
                    <div>
                        <button className="border-[#9538E2] text-[#9538E2] btn bg-transparent rounded-full  mr-5 border-solid">Short by Price</button>
                        <button className="border-[#9538E2] text-[#9538E2] btn bg-transparent rounded-full w-32 mr-5 border-solid">Purchase</button>
                    </div>
                </div>
            </div>
            <CartItem products={filteredProducts}></CartItem>
        </div>
    );
};

export default Dashboard;