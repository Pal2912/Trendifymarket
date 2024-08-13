import product from "./API/product.json";
import { localStorageForBag } from "./localSforbag";
import { removingElefromcart } from "./removingElefromcart";
import { controller } from "./controller";

let template_bag_container = document.querySelector(".template-bag-container");
let addtoproductdisplay = document.querySelector(".addtoproductdisplay");

let cartproducts = localStorageForBag();

let showdisplay = product.filter((currpro) => {
  return cartproducts.some((currproinLocalS) => currproinLocalS.id === currpro.id);
});

let cloningaddtocartemplate = () => {
  console.log("lengthboxx",showdisplay.length)
  if (showdisplay.length === 0) {

    let shoppingcart = document.createElement("div");
    shoppingcart.classList.add("shoppingcart");

    let emptyImage = document.createElement("img");
    let para=document.createElement("p")
    let btn=document.createElement("a")

    emptyImage.classList.add("cart-image")
    emptyImage.src = "https://static.vecteezy.com/system/resources/previews/015/131/880/original/flat-woman-holding-shopping-bags-cartoon-wallpaper-modern-design-for-shopping-online-website-design-png.png";

    para.classList.add("shopping-para")
    para.textContent="Your cart is empty"
    
    btn.classList.add("shopping-btn")
    btn.href = "/";
    btn.textContent = "Start shopping";

    shoppingcart.appendChild(emptyImage);
    shoppingcart.appendChild(para);
    shoppingcart.appendChild(btn);
    addtoproductdisplay.appendChild(shoppingcart);
  } else {
    showdisplay.forEach((currpro) => {
      let { image, category, id, name, stock, price } = currpro;

      let localStorageavialproduct = cartproducts.find((currproinLocalS) => {
        return currproinLocalS.id === id;
      });

      let cloningaddcartTemplate = document.importNode(template_bag_container.content, true);
      cloningaddcartTemplate.querySelector(".category-type").textContent = category;
      cloningaddcartTemplate.querySelector(".image-bag").src = image;
      cloningaddcartTemplate.querySelector(".product-name").textContent = name;
      cloningaddcartTemplate.querySelector(".price").textContent = `$${localStorageavialproduct.price}`;
      cloningaddcartTemplate.querySelector(".btn-qty-1").textContent = localStorageavialproduct.quantity;
      cloningaddcartTemplate.querySelector(".remove").addEventListener("click", () => removingElefromcart(id));
      cloningaddcartTemplate.querySelector(".controller").addEventListener("click", () => controller(id, price, stock));
      addtoproductdisplay.appendChild(cloningaddcartTemplate);
    });
  }
};

cloningaddtocartemplate();
