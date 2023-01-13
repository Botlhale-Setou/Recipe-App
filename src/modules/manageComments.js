const countComments = require("./countComments.js");

const addComment = async (itemId, usr, txt) => {
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/No6xjeOV6L9eg8TkvJgU/comments/`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        item_id: itemId,
        username: usr.value,
        comment: txt.value,
      }),
    }
  );
  usr.value = "";
  txt.value = "";
};

const showComment = async (itemId) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/No6xjeOV6L9eg8TkvJgU/comments?item_id=${itemId}`
  );
  const commentShow = document.querySelector(`.commentsDisplay`);
  const data = await response.json();
  let commDB = Array.from(data);

  if (commDB.length === 0) {
    commentShow.innerHTML = "be the first to post comment";
  } else {
    commentShow.innerHTML = renderComment(commDB);
  }
};

const renderComment = (arr) => {
  let display = document.querySelector(".displayCommCount");
  display.innerHTML = `(${countComments(arr)})`;

  let comments = "";
  if (arr.length !== undefined) {
    arr.forEach((obj) => {
      comments += `<p class="single-comment"><span class="comment-date">${obj.creation_date}</span><br><span class="user-name">${obj.username}:</span> <span class="comment-text">${obj.comment}</span></p>`;
    });
  }
  return comments;
};

export { addComment, showComment };
