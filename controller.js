import { localStorageForBag } from "./localSforbag";
let cartproducts = localStorageForBag();
export let controller = (id, price, stock, e) => {
    const curreleclicked = document.querySelector(`#card${id}`);
    
    if (!curreleclicked) {
        console.error(`Element with ID card${id} not found`);
        return;
    }

    const counting = curreleclicked.querySelector(".btn-qty-1");
    const productprice = curreleclicked.querySelector(".price");

    if (!counting || !productprice) {
        console.error(`Required elements not found within #card${id}`);
        return;
    }

    let quantity = 1;
    let localStorageprice = 0;
    let existingProduct = cartproducts.find((currCard) => currCard.id === id);

    if (existingProduct) {
        quantity = existingProduct.quantity;
        localStorageprice = existingProduct.price;
    } else {
        localStorageprice = price;
    }

    if (e.target.className === "increbtn") {
        if (quantity < stock) {
            quantity += 1;
        } else if (quantity === stock) {
            quantity = stock;
            localStorageprice = price * stock;
        }
    }

    if (e.target.className === "decrebtn") {
        if (quantity > 1) {
            quantity -= 1;
        }
    }

    localStorageprice = price * quantity;

    let updatedCardValues = { id, price: localStorageprice, quantity };
    let updatedCart = cartproducts.map((currPro) => currPro.id === id ? updatedCardValues : currPro);

    // Check if the product is new, if so, add it to the cart
    if (!existingProduct) {
        updatedCart.push(updatedCardValues);
    }

    localStorage.setItem("cartproduct", JSON.stringify(updatedCart));

    // Update the UI elements
    counting.textContent = quantity;
    productprice.textContent = `$${localStorageprice.toFixed(2)}`;
};
