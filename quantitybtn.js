export const quantity = (event, id, stock) => {
    const cardClicked = document.querySelector(`#card${id}`);
    const count = cardClicked.querySelector(".numspan");
    let qty = parseInt(count.getAttribute("data-quantity")) || 1;
    if (event.target.id === "plus" && qty < stock) {
        qty += 1;
    } else if (event.target.id === "minus" && qty > 1) {
        qty -= 1;
    }
    count.innerText = qty;  
    count.setAttribute("data-quantity", qty.toString());
    return qty;
}
