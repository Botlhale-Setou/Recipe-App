import { addComment, showComment } from "./manageComments";

import { itemLike, likeCount } from "./manageLikes.js";

const mealList = document.getElementById("meal");
const modal = document.querySelector(".meal-details");
const mealDetailsContent = document.querySelector(".meal-details-content");

const displayModal = async (obj) => {
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
  
            <h4 id="addCommTitle">Add comment<p class="displayCommCount"></p></h4>
            <input id="nameInput" type="text" placeholder="Your name" aria-placeholder="Your name">
            <textarea name="commentTA" id="cp-commentTA" cols="30" rows="10" placeholder="Your comment" aria-placeholder="Your comment"></textarea>
            <button id="commentButton-${obj.idMeal}" type="button">Post Comment</button>`;

  mealDetailsContent.innerHTML = html;
  modal.style.display = "block";

  setTimeout(() => {
    showComment(obj.idMeal);
  }, 1000);

  // Load Postcomment button behaviour
  const postCommentButton = document.querySelector(
    `#commentButton-${obj.idMeal}`
  );

  const user = document.querySelector("#nameInput");
  const text = document.querySelector("#cp-commentTA");

  postCommentButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (user.value !== "" && text.value !== "") {
      let idOfObj = postCommentButton.id.split("-")[1];

      addComment(idOfObj, user, text);

      setTimeout(() => {
        showComment(obj.idMeal);
      }, 1000);
    } else {
      console.log("error in submit");
    }
  });
};

const getMealList = async (url, term) => {
  let response = await fetch(`${url}${term}`);
  let data = await response.json();

  let html = "";
  if (data.meals) {
    data.meals.forEach((item) => {
      html += ` <div class="meal-item" data-id=${item.idMeal}>
            <div class="meal-img">
            <img src=${item.strMealThumb} alt="food" />
            </div>
            <div class="meal-name">
            <h3>${item.strMeal}</h3>
            <div class="for-heart">
  
            <i
            class="fa-solid fa-heart"
            id="like-${item.idMeal}"
            style="cursor: pointer; color: red;"
          ></i>
          <span class="like-count" id="like-count${item.idMeal}"></span>
          </div>
            <a href="#" class="recipe-btn" id =" recipebtn-">Comments</a>
            </div>
            </div>`;
    });
  } else {
    html = "sorry, we have nothing to show";
    mealList.classList.remove("notFound");
  }
  mealList.innerHTML = html;
  mealList.classList.add("notFound");

  let mealItems = document.querySelectorAll(".meal-item");
  mealItems.forEach((meal) => {
    let id = meal.dataset.id;
    likeCount(id);
  });

  document.querySelector("#yourResult").style.display = "block";
  document.querySelector(".initialMessage").style.display = "none";
};

export { getMealList, displayModal };
