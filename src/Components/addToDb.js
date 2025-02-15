import { toast } from 'react-toastify';


const getStoredCartList = () => {
    const storedCartlistStr = localStorage.getItem('cart')
    if (storedCartlistStr) {
        const storedCartlist = JSON.parse(storedCartlistStr);
        return storedCartlist;
    }
    else {
        return [];
    }
}

const addTostoredCartList = (cart) => {

    const storedList = getStoredCartList();
    // console.log(storedList);
    if (storedList.includes(cart)) {
        toast("Already exist in your cart");
    }
    else {
        storedList.push(cart);
        const storedCartlistStr = JSON.stringify(storedList);
        localStorage.setItem('cart', storedCartlistStr);
    }
}

const getWishList = () => {
    const storedWishlistStr = localStorage.getItem('wish-list')
    if (storedWishlistStr) {
        const storedWishlist = JSON.parse(storedWishlistStr);

        return storedWishlist;
    }
    else {
        return [];
    }
}
// console.log(getWishList);

const addToWishlist = (product) => {
    // console.log(product);
    const storedWishlist = getWishList();

    if (storedWishlist.includes(product)) {
        toast("Already Exists in your Wishlist")
    }
    else {
        storedWishlist.push(product);
        const storedWishlistStr = JSON.stringify(storedWishlist);
        localStorage.setItem('wish-list', storedWishlistStr);
    }
}

export { addTostoredCartList, getStoredCartList, addToWishlist, getWishList }