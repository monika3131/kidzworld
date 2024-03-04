// Define a function to handle clicking on "Add to cart" button
function addToCart(item) {
    // Update cart items count
    let cartValueElement = document.getElementById("cart-value");
    cartValueElement.textContent = parseInt(cartValueElement.textContent) + 1;

    // Update cart details in localStorage
    let cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
        cartItems = JSON.parse(cartItems);
    } else {
        cartItems = {};
    }

    // Increment quantity if item already exists in cart
    if (cartItems[item]) {
        cartItems[item]++;
    } else {
        cartItems[item] = 1;
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Define a function to handle clicking on "Cart items" button
function displayCart() {
    let cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
        cartItems = JSON.parse(cartItems);
        let totalAmount = 0;
        console.log("Order details:");
        for (let item in cartItems) {
            console.log(`${item}: ${cartItems[item]}`);
            // Calculate total amount
            // This part may need to be adjusted based on your actual implementation
            totalAmount += getItemPrice(item) * cartItems[item];
        }
        console.log(`Total amount: $${totalAmount.toFixed(2)}`);
    } else {
        console.log("Cart is empty");
    }
}

// Define a function to get the price of an item
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

// Add event listeners to "Add to cart" buttons
document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", () => {
        let itemId = button.id;
        addToCart(itemId);
    });
});

// Add event listener to "Cart items" button
document.getElementById("cart").addEventListener("click", displayCart);
