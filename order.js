// ORDER DATA FUNCTIONALITY

// Variables

const caseBtn = document.querySelectorAll(".bottom-content a");
const peolpeCircles = document.querySelectorAll(".people");
const dayCircles = document.querySelectorAll(".days");
const informationForm = document.querySelector(".oplysninger");
const informationBtn = document.querySelector(".informationBtn");
const orderOutput = document.querySelector("#customer-order");
const completeBtn = document.querySelector("#last-step");

// Defining variables for data storage

let chosenCase;
let people;
let days;
let firstName;
let email;
let phone;
let address;
let zip;
let city;

// Here the customer chooses a case which is then set as the chosenCase variable

// An eventlistener is added forEach of the buttons (btn) in the caseBtn nodelist. It is set to listen for a click
caseBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    chosenCase = btn.getAttribute("data-value"); // A data-value has been placed on each "a" tag. This value (the case name) is stored in the chosenCase variable.
    localStorage.setItem("Case", chosenCase); // Storing the variable to localStorage for later use. "Case" is the key, and "chosenCase" is the value.
  });
});

// Chosen days & no. of people

peolpeCircles.forEach((peopleCircle) => {
  peopleCircle.addEventListener("click", () => {
    people = peopleCircle.children[0].innerHTML; // This gets the innerHTML of the first child of the circle by using the children method.
    localStorage.setItem("People", people);
  });
});

dayCircles.forEach((dayCircle) => {
  dayCircle.addEventListener("click", () => {
    days = dayCircle.children[0].innerHTML;
    localStorage.setItem("Days", days);
  });
});

// Customer infomation

// A if statement is used to make sure that the code is not giving typeErrors when not on the correct HTML page
// The value of each input field is set to the respective variables when the "videre" button is clicked

if (document.title === "Nippon - Bestilling (trin 4)") {
  informationBtn.addEventListener("click", () => {
    firstName = document.querySelector("#name").value;
    email = document.querySelector("#email").value;
    phone = document.querySelector("#phone").value;
    address = document.querySelector("#address").value;
    zip = document.querySelector("#zip").value;
    city = document.querySelector("#city").value;
    localStorage.setItem("Name", firstName);
    localStorage.setItem("E-mail", email);
    localStorage.setItem("Phone", phone);
    localStorage.setItem("Address", address);
    localStorage.setItem("Zip", zip);
    localStorage.setItem("City", city);
  });
}

// Overview

// The last step uses the children method to select the correct output field in the "orderOutput" section
// Template literals are used to create HTML content and use the variables stored en localStorage

if (document.title === "Nippon - Bestilling (trin 5)") {
  orderOutput.children[1].innerHTML = `<p><b>Måltidskasse:</b> ${localStorage.getItem("Case")}</p>`;
  orderOutput.children[2].innerHTML = `<p><b>Antal personer:</b> ${localStorage.getItem("People")}</p>`;
  orderOutput.children[3].innerHTML = `<p><b>Antal dage:</b> ${localStorage.getItem("Days")}</p>`;
  orderOutput.children[5].innerHTML = `<p><b>Levering til:</b></p> <br> <ul id="customer-information">
<li><b>Navn:</b> ${localStorage.getItem("Name")}</li>
<li><b>E-mail:</b> ${localStorage.getItem("E-mail")}</li>
<li><b>Tlf:.</b> ${localStorage.getItem("Phone")}</li> 
<li><b>Adresse:</b> ${localStorage.getItem("Address")}</li> 
<li><b>By:</b> ${localStorage.getItem("Zip")} ${localStorage.getItem("City")}</li></ul>`;
}

// Complete order = wipe localStorage
completeBtn.addEventListener("click", () => {
  localStorage.clear();
});
