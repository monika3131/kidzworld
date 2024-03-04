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
            let itemPrice = getItemPrice(item);
            totalAmount += itemPrice * cartItems[item];
        }
        console.log(`Total amount: $${totalAmount.toFixed(2)}`);
    } else {
        console.log("Cart is empty");
    }
}
function getItemPrice(item) {
    switch (item) {
        case "book1":
            addToCart("book1"); 
            return 7.49;
        case "book2":
            addToCart("book2"); 
            return 4.59;
        case "book3":
            addToCart("book3"); 
            return 6.80;
        case "book4":
            addToCart("book4"); 
            return 10.00;
        case "book5":
            addToCart("book5"); 
            return 7.29;
        case "book6":
            addToCart("book6");
            return 4.99;
        case "game1":
            addToCart("game1"); 
            return 17.49;
        case "game2":
            addToCart("game2"); 
            return 19.99;
        case "game3":
            addToCart("game3"); 
            return 20.99;
        case "game4":
            addToCart("game4"); 
            return 19.49;
        case "craft1":
            addToCart("craft1"); 
            return 12.49;
        case "craft2":
            addToCart("craft2");
            return 19.99;
        case "craft3":
            addToCart("craft3");
            return 15.99;
        case "craft4":
            addToCart("craft4"); 
            return 18.49;
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
