const form = document.querySelector(".login_form")
const email = document.querySelector("#email");
const formEmailError = document.querySelector("#formEmailError");
const password = document.querySelector("#password");
const formpasswordError = document.querySelector("#formPasswordError");

function formValidation() {
  event.preventDefault();

  if (emailValidation(email.value) === true) {
    console.log("Email input valid!");
    formEmailError.style.display = "none";
  } else {
    formEmailError.style.display = "block";
    console.log("Input invalid!");
  }

  if (password.value.trim().length >= 8) {
    formPasswordError.style.display = "none";
  } else {
    formPasswordError.style.display = "block";
  }

  if (emailValidation(email.value) === true &&
      password.value.trim().length >= 8) {
        window.location.href = "support.html";
      }
}

// function formValidation() {
//     event.preventDefault();

//     if (emailValidation(email.value) === true) {
//         formEmailError.style.display = "none";
//         console.log("Email valid");
//       } else {
//         formEmailError.style.display = "block";
//         console.log("Email invalid");
//       }
// }

 function emailValidation(email) {
     const regEx = /\S+@\S+\.\S+/;
     const patternMatches = regEx.test(email);
     return patternMatches;
   }

   form.addEventListener("submit", formValidation);