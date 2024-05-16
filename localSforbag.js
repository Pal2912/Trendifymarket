import { updateCartValue } from "./updatcart";

export const localStorageForBag=()=>{
     let cartProducts=localStorage.getItem("cartproduct");
     if(!cartProducts){
        return []
     }
     cartProducts=JSON.parse(cartProducts)
     updateCartValue(cartProducts)
     return cartProducts 
}