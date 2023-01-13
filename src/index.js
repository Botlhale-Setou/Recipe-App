import "./styles.css";

import { itemLike, likeCount } from "./modules/manageLikes.js";

import { displayModal, getMealList } from "./modules/UI";
import { countMeals } from "./modules/countMeals";

const searchBtn = document.querySelector(".search-btn");
const mealList = document.getElementById("meal");

const modal = document.querySelector(".meal-details");
const modalCloseBtn = document.querySelector(".recipe-close-btn");
const catBeef = document.querySelector("#beef");
const catSeafood = document.querySelector("#seafood");
const catDessert = document.querySelector("#dessert");
const foodBase = "https://www.themealdb.com/api/json/v1/1/";

const catUrl = `${foodBase}filter.php?c=`;
const ingUrl = `${foodBase}filter.php?i=`;

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#yourResult").style.display = "none";
  document.querySelector(".initialMessage").style.display = "block";
});

// search button
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let searchInputText = document.getElementById("search-input").value.trim();
  getMealList(ingUrl, searchInputText);
});

// getting recipe modal
mealList.addEventListener("click", async (e) => {
  e.preventDefault();
  if (e.target.classList.contains("recipe-btn")) {
    let mealItem = e.target.parentElement.parentElement;
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`
    );
    let data = await response.json();
    displayModal(data.meals);
  }
});

//closing modal

modalCloseBtn.addEventListener("click", (e) => {
  modal.style.display = "none";
});

catBeef.addEventListener("click", (e) => {
  getMealList(catUrl, "beef");
  countMeals(catUrl, "Beef", catBeef.childNodes[1]);
  catBeef.childNodes[1].style.visibility = "visible";
});

catSeafood.addEventListener("click", (e) => {
  getMealList(catUrl, "Seafood");
  countMeals(catUrl, "Seafood", catSeafood.childNodes[1]);
  catSeafood.childNodes[1].style.visibility = "visible";
});

catDessert.addEventListener("click", (e) => {
  getMealList(catUrl, "Dessert");
  countMeals(catUrl, "Dessert", catDessert.childNodes[1]);
  catDessert.childNodes[1].style.visibility = "visible";
});

mealList.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("fa-heart")) {
    let likeid = e.target.id.split("-")[1];
    itemLike(likeid);

    let likenumber = document.querySelector(`#like-count${likeid}`).textContent;
    document.querySelector(`#like-count${likeid}`).innerHTML = `${
      +likenumber + 1
    }`;

    setTimeout(() => {
      likeCount(likeid);
    }, 500);
  }
});
