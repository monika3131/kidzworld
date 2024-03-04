function addToCart(item) {
    let cartValueElement = document.getElementById("cart-value");
    cartValueElement.textContent = parseInt(cartValueElement.textContent) + 1;

    let cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
        cartItems = JSON.parse(cartItems);
    } else {
        cartItems = {};
    }

    if (cartItems[item]) {
        cartItems[item]++;
    } else {
        cartItems[item] = 1;
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function displayCart() {
    let cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
        cartItems = JSON.parse(cartItems);
        let totalAmount = 0;
        console.log("Order details:");
        for (let item in cartItems) {
            console.log(`${item}: ${cartItems[item]}`);
            totalAmount += getItemPrice(item) * cartItems[item];
        }
        console.log(`Total amount: $${totalAmount.toFixed(2)}`);
    } else {
        console.log("Cart is empty");
    }
}
function getItemPrice(item) {
    switch (item) {
        case "book1":
            return 7.49;
        case "book2":
            return 4.59;
        case "book3":
            return 6.80;
        case "book4":
            return 10.00;
        case "book5":
            return 7.29;
        case "book6":
            return 4.99;
        // Add cases for other items if needed
        default:
            return 0;
    }
}
document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", () => {
        let itemId = button.id;
        addToCart(itemId);
    });
});
document.getElementById("cart").addEventListener("click", displayCart);
