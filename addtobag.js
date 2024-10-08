import { localStorageForBag } from "./localSforbag";
import { popuptext } from "./popuptext";
import { updateCartValue } from "./updatcart";
localStorageForBag()
export const addtobag = (event, id, stock) => {
  let lscalling = localStorageForBag();
  const currCrad = document.querySelector(`#card${id}`);
  let quantity = Number(currCrad.querySelector(".numspan").innerText);
  let price = Number(currCrad.querySelector(`.priceofproduct`).innerText.replace("$", ""));

  let uniquelocal = lscalling.find((product) => product.id === id);

  if (uniquelocal) {
    quantity = uniquelocal.quantity + quantity;
    price = (price * quantity).toFixed(2);
    let updatedcardvalues = { id, price, quantity };
    let updatedcart = lscalling.map((currpro) => currpro.id === id ? updatedcardvalues : currpro);
    localStorage.setItem("cartproduct", JSON.stringify(updatedcart));
    popuptext("add",id)
    updateCartValue(updatedcart); 
    return;
  }

  price =  (price * quantity).toFixed(2);

  lscalling.push({ id, price, quantity });
  localStorage.setItem("cartproduct", JSON.stringify(lscalling));
  
  updateCartValue(lscalling);
};
