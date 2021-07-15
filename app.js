"use-strict";

const form = document.querySelector("#form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorIcons = document.querySelectorAll(".error-icon");
const errorMsgs = document.querySelectorAll(".error-msg");
const input = document.querySelectorAll("input");
const submitAlert = document.querySelector(".form-submitted");

//init
errorIcons.forEach((el) => {
  el.classList.add("hidden");
});

errorMsgs.forEach((el) => {
  el.classList.add("hidden");
});

//functions to handle class manipulations
const errorClassAdd = function (el) {
  if (!el.nextElementSibling.classList.contains("hidden")) {
    el.nextElementSibling.classList.add("hidden");
  }

  if (!el.nextElementSibling.nextElementSibling.classList.contains("hidden")) {
    el.nextElementSibling.nextElementSibling.classList.add("hidden");
  }
};

const errorClassRemove = function (el) {
  el.nextElementSibling.classList.remove("hidden");
  el.nextElementSibling.nextElementSibling.classList.remove("hidden");
};

const classManipulation = function (el) {
  if (el.value === "") {
    errorClassRemove(el);
  } else {
    errorClassAdd(el);
  }
};

const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

//form event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  classManipulation(firstName);
  classManipulation(lastName);
  classManipulation(password);

  if (email.value.match(regex)) {
    errorClassAdd(email);
  } else {
    errorClassRemove(email);
    email.style.color = "var(--primary-red)";
  }

  if (
    firstName.value &&
    lastName.value &&
    password.value &&
    email.value.match(regex)
  ) {
    input.forEach((input) => {
      input.value = "";
    });
    submitAlert.classList.remove("visible");
    setTimeout(() => {
      submitAlert.classList.add("visible");
    }, 1500);
  }
});
