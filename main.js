import './style.css'
import product from "./API/product.json";
import { homeproducts } from './homepagepro';
const sliderimg = document.querySelector(".section-container4");
const images = document.querySelectorAll(".image-slider");

let slideNumber = 1;

const nextImg = function() {
    if (slideNumber < images.length) {
        sliderimg.style.transform = `translateX(-${slideNumber *844}px)`;
        slideNumber++;
    } else {
        sliderimg.style.transform = `translateX(0px)`;
        slideNumber = 1;
    }
};

// setInterval(nextImg,2000);
homeproducts(product)



