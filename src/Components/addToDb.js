import js from "@eslint/js";


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

const addTostoredCartList = (id) => {
    console.log(id);

    const storedList = getStoredCartList();
    if (storedList.includes(id)) {
        alert("Already exist in your cart");
    }
    else {
        storedList.push(id);
        const storedCartlistStr = JSON.stringify(storedList);
        localStorage.setItem('cart', storedCartlistStr);
    }
}

const getWishList = () => {
    const storedWishlistStr = localStorage.getItem('wish-list')
    if (storedWishlistStr) {
        const storedWishlist = JSON.parse(storedWishlist);
        return storedWishlist;
    }
    else {
        return [];
    }
}

const addToWishlist = (product) => {
    console.log(product);
    const storedWishlist = getWishList();

    if (storedWishlist.includes(product)) {
        alert("Already Exists in your Wishlist")
    }
    else {
        storedWishlist.push(product);
        const storedWishlistStr = JSON.stringify(storedWishlist);
        localStorage.setItem('Wish-list', storedWishlistStr);
    }
}

export { addTostoredCartList, getStoredCartList, addToWishlist }