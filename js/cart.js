const minus = document.querySelector(".fa-minus");
const plus = document.querySelector(".fa-plus");
const value = document.querySelector(".cartGameAmountValue");
const convertedValue = parseFloat(value.value);

minus.addEventListener("click", decreaseValue);

plus.addEventListener("click", increaseValue);

function decreaseValue() {
  convertedValue = convertedValue - 1;
}

function increaseValue() {
  convertedValue = convertedValue + 1;
}
