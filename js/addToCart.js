const addToCartBtns = document.querySelectorAll(".add_to_cart_btn");
const cartIcon = document.querySelector(".cart_icon");

for (const addToCartBtn of addToCartBtns) {
  addToCartBtn.addEventListener("click", productAddedToCartAlert);
}

function productAddedToCartAlert() {
  alert("You have added a product to your cart");
}
