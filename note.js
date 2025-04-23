"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelector(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const active = document.querySelector(`.active`);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.addEventListener(`click`, openModal);
btnCloseModal.addEventListener(`click`, closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

active.addEventListener(`click`, function () {
  alert(
    `Thank you for reaching out to Calculus Pathfinder Consult. For immediate attention, please call or WhatApp 07047595654.`
  );
});
