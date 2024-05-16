const cartvalUpdate=document.querySelector(".bag")

export const updateCartValue=(lscalling)=>{
  return  cartvalUpdate.innerHTML=lscalling.length
}