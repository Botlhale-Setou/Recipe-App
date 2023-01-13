// const refreshComments = async (elem, id) => {
//   let raw = await getComments(id);
//   let commDB = Array.from(raw);
//   console.log(commDB, id);
//   const viewer = document.querySelector(".commentsDisplay");

//   if (commDB.length === 0) {
//     // viewer.innerHTML = 'Hi there 👋 - be the first to comment on this emoji';
//     // viewer.style.color = 'yellow';
//     console.log("None");
//   } else {
//     commDB.forEach((commentObj) => {
//       viewer.innerHTML += `<p>${commentObj.creation_date} ${commentObj.username}: ${commentObj.comment}</p>`;
//     });
//   }
// };

// const postComment = async (data) => {
//   const clink =
//     "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/No6xjeOV6L9eg8TkvJgU/comments";

//   await fetch(clink, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json; charset= UTF-8",
//     },
//     body: JSON.stringify(data),
//   });
// };

// const getComments = async (itemID) => {
//   const link = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/No6xjeOV6L9eg8TkvJgU/comments?item_id=${itemID}`;

//   const response = await fetch(link);
//   const result = await response.json();

//   return result;
// };https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/No6xjeOV6L9eg8TkvJgU/likes/

// module.exports = refreshComments;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const countComments = require('./countComments.js');

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
  console.log("inside add comment");
};

const showComment = async (itemId) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/No6xjeOV6L9eg8TkvJgU/comments?item_id=${itemId}`
  );
  const commentShow = document.querySelector(`.commentsDisplay`);
  const data = await response.json();
  let commDB = Array.from(data);
  console.log(commDB);
  if (commDB.length === 0) {
    commentShow.innerHTML = "be the first to post comment";
    console.log("no comments");
  } else {
    //   commentShow.innerHTML += `<p>${commentObj.creation_date} ${commentObj.username}: ${commentObj.comment}</p>`;
    commentShow.innerHTML = renderComment(commDB);
  }
};

const renderComment = (arr) => {
  let display = document.querySelector('.displayCommCount');
  display.innerHTML = `(${countComments(arr)})`;

  let comments = "";
  if (arr.length !== undefined) {
    arr.forEach((obj) => {
      comments += `<p class="single-comment"><span class="comment-date">${obj.creation_date}</span><br><span class="user-name">${obj.username}:</span> <span class="comment-text">${obj.comment}</span></p>`;
    });
  }
  return comments;
};
// await response.json().then((comments) => {
//   comments.forEach((commentObj) => {
//     commentShow.innerHTML += `<p>${commentObj.creation_date} ${commentObj.username}: ${commentObj.comment}</p>`;
//   });
// });

module.exports = addComment;
module.exports = showComment;
