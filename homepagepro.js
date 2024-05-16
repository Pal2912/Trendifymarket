const productContainerTemplate=document.querySelector(".product-container-template")
const containerforProduct=document.querySelector(".product-container")
import { quantity } from "./TrendifyMarket/quantitybtn"
import { addtobag } from "./addtobag"



export const homeproducts=(product)=>{
    if(!product){
        return false
    }
   product.forEach((elefromproduct)=>{
    const {id,name,category,brand,price,stock,description,image}=elefromproduct
    const cloningTemplate=document.importNode(productContainerTemplate.content,true)
    cloningTemplate.querySelector(".template-div").setAttribute("id",`card${id}`);
    cloningTemplate.querySelector(".template-category").textContent=category;
    cloningTemplate.querySelector(".template-description").textContent=description;
    cloningTemplate.querySelector(".img-product").src=image;
    cloningTemplate.querySelector(".template-h2").textContent=name;
    cloningTemplate.querySelector(".stockavail").textContent=stock;
    cloningTemplate.querySelector(".priceofproduct").textContent=`$ ${price} `;
    cloningTemplate.querySelector(".Actualprice").textContent=` $ ${price*4}`;
    cloningTemplate.querySelector(".template-bag-btn").addEventListener("click",(event)=>{
        quantity(event,id,stock)
    })
    cloningTemplate.querySelector(".template-btn").addEventListener("click",(event)=>{
        addtobag(event,id,stock)
    })
    
    containerforProduct.append(cloningTemplate)
   })
}