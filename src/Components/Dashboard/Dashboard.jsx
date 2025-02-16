import { useState, useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import CommonBanner from "../CommonBanner/CommonBanner";
import { getStoredCartList, getWishList } from "../addToDb";
import { toast, ToastContainer } from "react-toastify";
import Modal from "../Modal/Modal";
import { FaCircleCheck } from "react-icons/fa6";


const Dashboard = () => {

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setProducts] = useState();
    const [activeButton, setActiveButton] = useState('cart');
    const [totalCost, setTotalCost] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                const cartStoredItem = getStoredCartList();
                const initialFilteredItems = filterLocalStorage(data, cartStoredItem);
                setFilteredProducts(initialFilteredItems);
                calculateTotalCost(initialFilteredItems);
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
        calculateTotalCost(filteredItems);
    }

    const handleFilterWishlist = () => {
        const filteredItems = filterLocalStorage(products, wishListStoredItem);
        setFilteredProducts(filteredItems);
        setActiveButton('wishlist');
        calculateTotalCost(filteredItems);
    }

    const removeFromCart = (id) => {
        const updatedCart = cartStoredItem.filter(item => item !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        const updatedFilteredProducts = filteredProducts.filter(product => product.id !== id);
        setFilteredProducts(updatedFilteredProducts);
        calculateTotalCost(updatedFilteredProducts);
        toast("Successfully removed from your cart");
    }

    const removeFromWishlist = (id) => {
        const updatedWishlist = wishListStoredItem.filter(item => item !== id);
        localStorage.setItem('wish-list', JSON.stringify(updatedWishlist));
        const updatedFilteredProducts = filteredProducts.filter(product => product.id !== id);
        setFilteredProducts(updatedFilteredProducts);
        calculateTotalCost(updatedFilteredProducts);
        toast("Successfully removed from your wishlist")
    }

    const handleRemove = (id) => {
        if (activeButton === 'cart') {
            removeFromCart(id);
        } else if (activeButton === 'wishlist') {
            removeFromWishlist(id);
        }
    }

    const calculateTotalCost = (items) => {
        const total = items.reduce((sum, item) => sum + item.price, 0);
        setTotalCost(total.toFixed(2));
    }

    const sortByPrice = () => {
        const sortedProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
        setFilteredProducts(sortedProducts);
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
                    <h2>Total cost: {totalCost}</h2>
                    <div>
                        <button onClick={sortByPrice} className="border-[#9538E2] text-[#9538E2] btn bg-transparent rounded-full  mr-5 border-solid">Short by Price</button>
                        <button onClick={() => setIsModalOpen(true)} className="border-[#9538E2] text-[#9538E2] btn bg-transparent rounded-full w-32 mr-5 border-solid">Purchase</button>
                    </div>
                </div>
            </div>
            <CartItem products={filteredProducts} handleRemove={handleRemove}></CartItem>
            <ToastContainer />
            <div className="text-center">
                <Modal totalCost={totalCost} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>

                </Modal>
            </div>
        </div>
    );
};

export default Dashboard;