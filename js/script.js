const main = document.querySelector(".login_main");
const gamesContainer = document.querySelector(".games_container");
const earlierPrice = document.querySelector(".earlier_price");

const games = [
  {
    name: "Assassin",
    id: "001",
    image: ".//images/Assassin.jpg",
    outlet: true,
  },

  {
    name: "Black",
    id: "002",
    image: "../images/Black.jpg",
    outlet: false,
  },

  {
    name: "Cyberpunk",
    id: "003",
    image: "../images/Cyperpunk.jpg",
    outlet: true,
  },

  {
    name: "Super Duper",
    id: "004",
    image: "../images/Super_Duper.jpg",
    outlet: true,
  },

  {
    name: "Furious",
    id: "005",
    image: "../images/Furious.jpg",
    outlet: true,
  },
];

// for (i = 0; i < games.length; i++) {
//   console.log(games[i].id);
//   console.log(games.length);
//   console.log(games[i].name);
//   console.log(games[i].outlet);

//   gamesContainer.innerHTML += `<div class="gamecard">
//     <div class="thumbnail_container">
//         <a href="#"> <img class="assassin_thumbnail" src="${games[i].image}" alt="assassin game"> </a>
//     </div>
//     <div class="gameinfo">
//         <a href="#"><p class="title">${games[i].name}</p></a>
//         <div class="subinfo">
//             <div class="price">
//                 <p class="earlier_price">$5.00</p>
//                 <p class="current_price">$10.00</p>
//             </div>
//             <div class="rating">
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star-half"></i>
//             </div>
//         </div>
//     </div>
//     <button class="add_to_cart_btn"><i class="fa-solid fa-cart-plus add_to_cart_icon" title="Add to cart"></i></button>
// </div>`;

//   const addToCartBtn = document.querySelector(".add_to_cart_btn");

//   if (addToCartBtn.addEventListener("click", productAddedToCartAlert)) {
//   }
// }

// function productAddedToCartAlert() {
//   alert("You have added a product to your cart");
// }
