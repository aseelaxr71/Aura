
function filterProducts(category) {
    const rows = document.querySelectorAll("tbody tr");

    rows.forEach(row => {
        const productCategory = row.cells[2].textContent.trim();

        row.style.display =
            category === "All" || productCategory === category
                ? ""
                : "none";
    });
}

let total = 0;

function addToCart(price) {
    total = total + price;
    alert("Added to cart!");
}

function checkout() {
    alert("Your total is " + total + " SAR");
}

function calculateTotal() {
    let total = 0;
    let rows = document.querySelectorAll("tbody tr");

    for (let i = 0; i < rows.length; i++) {
        let price = Number(rows[i].cells[3].innerText);
        let quantity = Number(rows[i].cells[4].children[0].value);

        total = total + (price * quantity);
    }

    document.getElementById("total").innerText =
        "Grand Total: " + total + " SAR";
}
