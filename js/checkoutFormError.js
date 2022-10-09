const checkoutForm = document.querySelector(".checkoutForm");
const firstName = document.querySelector("#fname");
const firstNameError = document.querySelector("#formFirstNameError");
const lastName = document.querySelector("#lname");
const lastNameError = document.querySelector("#formLastNameError");
const telephone = document.querySelector("#number");
const numberError = document.querySelector("#formNumberError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#formEmailError");
const country = document.querySelector("#country");
const countryError = document.querySelector("#formCountryError");

function checkoutFormValidation() {
  event.preventDefault();

  if (firstName.value.trim().length >= 2) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (lastName.value.trim().length >= 2) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (telephone.value.trim().length === 8) {
    numberError.style.display = "none";
  } else {
    numberError.style.display = "block";
  }

  if (emailValidation(email.value) === true) {
    formEmailError.style.display = "none";
  } else {
    formEmailError.style.display = "block";
  }

  if (country.value.trim().length !== 0) {
    countryError.style.display = "none";
  } else {
    countryError.style.display = "block";
  }

  if (
    firstName.value.trim().length >= 2 &&
    lastName.value.trim().length >= 2 &&
    telephone.value.trim().length === 8 &&
    emailValidation(email.value) === true &&
    country.value.trim().length !== 0
  ) {
    window.location.href = "checkoutSuccess.html";
  }
}

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

checkoutForm.addEventListener("submit", checkoutFormValidation);
