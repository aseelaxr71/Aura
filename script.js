
let total = 0;

function addToCart(price) {
    total = total + price;
    alert("Added to cart!");
}

function checkout() {
    alert("Your total is " + total + " SAR");
}
