import { localStorageForBag } from "./localSforbag";
import { popuptext } from "./popuptext";
import { updateCartValue } from "./updatcart";



export let removingElefromcart=(id)=>{ 
let cartproducts=localStorageForBag();
cartproducts=cartproducts.filter((currpro)=>currpro.id!==id);
localStorage.setItem("cartproduct",JSON.stringify(cartproducts));

// let removediv=document.getElementById(`card${id}`);
// if(removediv){
//      removediv.remove();
// }
popuptext("delete",id)
updateCartValue(cartproducts)
};