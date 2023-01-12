import "./styles.css";

const refreshComments = require("./modules/manageComments.js");
const postComment = require("./modules/manageComments.js");
const renderComment = require("./modules/manageComments.js");
const showComment = require("./modules/manageComments.js");
const addComment = require("./modules/manageComments.js");

const searchBtn = document.querySelector(".search-btn");
const mealList = document.getElementById("meal");
const mealDetailsContent = document.querySelector(".meal-details-content");
const recipeCloseBtn = document.querySelector(".recipe-close-btn");
const modal = document.querySelector(".meal-details");
const modalCloseBtn = document.querySelector(".recipe-close-btn");
const catBeef = document.querySelector("#beef");
const catSeafood = document.querySelector("#seafood");
const catDessert = document.querySelector("#dessert");
const foodBase = "https://www.themealdb.com/api/json/v1/1/";
const searchUrl = `${foodBase}search.php?s=`;
const catUrl = `${foodBase}filter.php?c=`;
const ingUrl = `${foodBase}filter.php?i=`;
const appId = "No6xjeOV6L9eg8TkvJgU";
const baseLink = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/No6xjeOV6L9eg8TkvJgU`;

const getMealList = async (url, term) => {
  // let searchInputText = document.getElementById("search-input").value.trim();
  // let response = await fetch(
  //   `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`
  // );
  let response = await fetch(`${url}${term}`);
  let data = await response.json();
  console.log(data);
  let html = "";
  if (data.meals) {
    data.meals.forEach((item) => {
      html += ` <div class="meal-item" data-id=${item.idMeal}>
          <div class="meal-img">
          <img src=${item.strMealThumb} alt="food" />
          </div>
          <div class="meal-name">
          <h3>${item.strMeal}</h3>
          <a href="#" class="recipe-btn">Comments</a>
          </div>
          </div>`;
    });
  } else {
    html = "sorry, we have nothing to show";
    mealList.classList.remove("notFound");
  }
  mealList.innerHTML = html;
  mealList.classList.add("notFound");
};

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

const displayModal = async (obj) => {
  console.log(obj);
  obj = obj[0];
  let html = "";

  html = `<h2 class="recipe-title">${obj.strMeal}</h2>
        <p class="recipe-category">${obj.strCategory}</p>
        <div class="recipe-instruct">
          <h3>Instruction</h3>
          <p>
          ${obj.strInstructions}
          </p>
        </div>
        <div class="recipe-meal-img">
          <img src="${obj.strMealThumb}" alt="food" height="100px" width="100px" />
        </div>
        <div class="recipe-link">
          <a href="${obj.strYoutube}" target="_blank">Watch video</a>
        </div>

        <div class="commentsDisplay">
	      </div>

	      <h4 id="addCommTitle">Add comment</h4>
	      <input id="nameInput" type="text" placeholder="Your name" aria-placeholder="Your name">
	      <textarea name="commentTA" id="cp-commentTA" cols="30" rows="10" placeholder="Your comment" aria-placeholder="Your comment"></textarea>
	      <button id="commentButton" type="button">Comment</button>`;

  mealDetailsContent.innerHTML = html;
  modal.style.display = "block";

  setTimeout(() => {
    showComment(obj.idMeal);
  }, 1000);

  // Load Postcomment button behaviour
  const submitBtn = document.querySelector("#commentButton");

  const user = document.querySelector("#nameInput");
  const text = document.querySelector("#cp-commentTA");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (user.value !== "" && text.value !== "") {
      addComment(obj.idMeal, user, text);
      // successMsg(message);
      setTimeout(() => {
        showComment(obj.idMeal);
        // showCount(baseLink, cardData.idMeal);
      }, 1000);
    } else {
      // errorMsg(message);
      console.log("error in submit");
    }
  });
};

//closing modal

modalCloseBtn.addEventListener("click", (e) => {
  modal.style.display = "none";
});

// count functions
const mealsCount = (arr) => {
  let result = 0;
  if (arr.length === undefined) {
    result = 0;
  } else {
    result = arr.length;
  }
  return result;
};
const countMeals = async (url, term, element) => {
  const response = await fetch(`${url}${term}`);
  await response.json().then((food) => {
    const foods = food.meals;
    element.innerText = mealsCount(foods);
  });
};

//navbar clicks

catBeef.addEventListener("click", (e) => {
  getMealList(catUrl, "beef");
  countMeals(catUrl, "Beef", catBeef.childNodes[1]);
  catBeef.childNodes[1].style.visibility = "visible";
  catSeafood.childNodes[1].innerText = "";
  catSeafood.childNodes[1].style.visibility = "hidden";
  catDessert.childNodes[1].innerText = "";
  catDessert.childNodes[1].style.visibility = "hidden";
});

catSeafood.addEventListener("click", (e) => {
  getMealList(catUrl, "Seafood");
  countMeals(catUrl, "Seafood", catSeafood.childNodes[1]);
  catSeafood.childNodes[1].style.visibility = "visible";
  catBeef.childNodes[1].innerText = "";
  catBeef.childNodes[1].style.visibility = "hidden";
  catDessert.childNodes[1].innerText = "";
  catDessert.childNodes[1].style.visibility = "hidden";
});

catDessert.addEventListener("click", (e) => {
  getMealList(catUrl, "Dessert");
  countMeals(catUrl, "Dessert", catDessert.childNodes[1]);
  catDessert.childNodes[1].style.visibility = "visible";
  catBeef.childNodes[1].innerText = "";
  catBeef.childNodes[1].style.visibility = "hidden";
  catSeafood.childNodes[1].innerText = "";
  catSeafood.childNodes[1].style.visibility = "hidden";
});
