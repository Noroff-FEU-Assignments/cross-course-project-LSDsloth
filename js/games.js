const productsUrl =
  "http://localhost/flower-power/wordpress/wp-json/wc/store/products";
const gamesContainer = document.querySelector(".games_container");
const allGamesContainer = document.querySelector(".allGames .games_container");
const upcomingGamesContainer = document.querySelector(
  ".upcomingGames .games_container"
);
const usedGamesContainer = document.querySelector(
  ".usedGames .games_container"
);

async function getProducts(url) {
  const response = await fetch(url);
  const games = await response.json();
  console.log(games);

  for (let i = 0; i < 5; i++) {
    console.log("ForEach loop: " + games[i].name);
    allGamesContainer.innerHTML += `
               <div class="gamecard">
               <div class="thumbnail_container">
                 <a href="gamepage.html?name=${games[i].name}">
                   <img
                     class="assassin_thumbnail"
                     src="${games[i].images[0].src}"
                     alt="${games[i].name}"
                     loading="lazy"
                   />
                 </a>
               </div>
               <div class="gameinfo">
                 <a href="gamepage.html?name=${games[i].name}"><p class="title">${games[i].name}</p></a>
                 <div class="subinfo">
                   <div class="price">
                     <p class="earlier_price"></p>
                     <p class="current_price">${games[i].prices.sale_price} ${games[i].prices.currency_symbol}</p>
                   </div>
                   <div class="rating">
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star-half"></i>
                   </div>
                 </div>
               </div>
               <button class="add_to_cart_btn" title="Add to cart">
                 <i class="fa-solid fa-cart-plus add_to_cart_icon"></i>
               </button>
             </div>`;
  }

  for (let i = 0; i < 5; i++) {
    console.log("ForEach loop: " + games[i].name);
    upcomingGamesContainer.innerHTML += `
               <div class="gamecard">
               <div class="thumbnail_container">
                 <a href="gamepage.html?name=${games[i].name}">
                   <img
                     class="assassin_thumbnail"
                     src="${games[i].images[0].src}"
                     alt="${games[i].name}"
                     loading="lazy"
                   />
                 </a>
               </div>
               <div class="gameinfo">
                 <a href="gamepage.html?name=${games[i].name}"><p class="title">${games[i].name}</p></a>
                 <div class="subinfo">
                   <div class="price">
                     <p class="earlier_price"></p>
                     <p class="current_price">${games[i].prices.sale_price} ${games[i].prices.currency_symbol}</p>
                   </div>
                   <div class="rating">
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star-half"></i>
                   </div>
                 </div>
               </div>
               <button class="add_to_cart_btn" title="Add to cart">
                 <i class="fa-solid fa-cart-plus add_to_cart_icon"></i>
               </button>
             </div>`;
  }

  for (let i = 0; i < 5; i++) {
    console.log("ForEach loop: " + games[i].name);
    usedGamesContainer.innerHTML += `
               <div class="gamecard">
               <div class="thumbnail_container">
                 <a href="gamepage.html?name=${games[i].name}">
                   <img
                     class="assassin_thumbnail"
                     src="${games[i].images[0].src}"
                     alt="${games[i].name}"
                     loading="lazy"
                   />
                 </a>
               </div>
               <div class="gameinfo">
                 <a href="gamepage.html?name=${games[i].name}"><p class="title">${games[i].name}</p></a>
                 <div class="subinfo">
                   <div class="price">
                     <p class="earlier_price"></p>
                     <p class="current_price">${games[i].prices.sale_price} ${games[i].prices.currency_symbol}</p>
                   </div>
                   <div class="rating">
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star-half"></i>
                   </div>
                 </div>
               </div>
               <button class="add_to_cart_btn" title="Add to cart">
                 <i class="fa-solid fa-cart-plus add_to_cart_icon"></i>
               </button>
             </div>`;
  }
}
getProducts(productsUrl);
