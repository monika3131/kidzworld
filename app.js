var cartValueElement = document.getElementById("cart-value");
var cartButtonElement = document.getElementById("cart");

var addButtonElements = document.getElementsByClassName("button");

var products = [
  {
    name: "Stuffed toys",
    quantity: 0,
    dollars: 15,
    cents: 99,
  },
  {
    name: "Monopoly",
    quantity: 0,
    dollars: 19,
    cents: 49,
  },
  // Other product items...
  {
    name: "This was our pact",
    quantity: 0,
    dollars: 7,
    cents: 49,
  },
  {
    name: "The famous five",
    quantity: 0,
    dollars: 4,
    cents: 59,
  }
];

function updateCartValue() {
  let cartCount = 0;
  for (let index = 0; index < products.length; index++) {
    cartCount = cartCount + products[index].quantity;
  }
  cartValueElement.innerHTML = cartCount;
}

for (let i = 0; i < addButtonElements.length; i++) {
  addButtonElements[i].onclick = (e) => {
    products[i].quantity++;
    updateCartValue();
  };
}

var totalPriceDollars = 0;
var totalPriceCents = 0;

function updateTotalPrice() {
  let totalPriceInCents = 0;

  for (let index = 0; index < products.length; index++) {
    totalPriceInCents +=
      products[index].quantity * (products[index].dollars * 100 + products[index].cents);
  }
  totalPriceDollars = Math.floor(totalPriceInCents / 100);
  totalPriceCents = totalPriceInCents % 100;
}

cartButtonElement.onclick = () => {
  updateTotalPrice();

  let orderDetails = "";

  for (let index = 0; index < products.length; index++) {
    if (products[index].quantity !== 0) {
      orderDetails +=
        "Product name: " +
        products[index].name +
        " - Quantity: " +
        products[index].quantity +
        "\n";
    }
  }

  let totalPriceMessage =
    "The total price is " + totalPriceDollars + "$ and " + totalPriceCents + " cents";
  let message = orderDetails + totalPriceMessage;
  let encodedMessage = encodeURIComponent(message);
  window.open("https://api.whatsapp.com/send?text=" + encodedMessage);
};
