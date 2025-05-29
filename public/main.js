// main.js - client-side code to connect to the bad password API

// REFERENCES
let password = document.querySelector("#password");
let info = document.querySelector("#info");
let button = document.querySelector("#submit");

// EVENTS
window.addEventListener("load", updatePassword);
document.addEventListener("submit", (e) => {
  e.preventDefault();
  updatePassword();
});

async function updatePassword() {
  // base url for API always returns a common bad password
  let url = "./api";

  // request data
  await fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log("fetch() response", json);
      password.value = json.message;
    });
}
