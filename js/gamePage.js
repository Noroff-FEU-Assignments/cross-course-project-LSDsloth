const queryString = document.location.search;
console.log(queryString);

const title = document.querySelector("title");

const params = new URLSearchParams(queryString);

const name = params.get("name");

console.log(name);

const productsUrl =
  "http://localhost/flower-power/wordpress/wp-json/wc/store/products";

const gameDescription = document.querySelector(".description");
const gameCoverImg = document.querySelector(".gameCoverImg");
const gameInfoContainer = document.querySelector(".gameinfo_container");
const gameTags = document.querySelector(".tags");
const gameInfoName = document.querySelector(".gameInfoName");
const gamePagePrice = document.querySelector(".gamePagePrice");

async function wizard() {
  title.innerHTML += name;

  try {
    const response = await fetch(productsUrl);
    const results = await response.json();

    for (let i = 0; i < results.length; i++) {
      if (results[i].name === name) {
        console.log(results[i].description);
        console.log(results[i].tags.length);
        console.log(results[i].images[0].src);
        gameDescription.innerHTML = results[i].description;

        gameCoverImg.innerHTML += `
        <img src="${results[i].images[0].src}" alt="assassin game" />
        `;

        for (let n = 0; n < results[i].tags.length; n++) {
          console.log(results[i].tags[n].name);
          gameTags.innerHTML += `
        <a href="#">${results[i].tags[n].name}</a>
        `;
        }

        gamePagePrice.innerHTML =
          results[i].prices.sale_price + results[i].prices.currency_symbol;

        gameInfoName.innerHTML = results[i].name;
      }
    }

    console.log(results);
  } catch (error) {}
}

wizard();
