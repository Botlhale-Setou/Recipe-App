const refreshComments = async (elem, id) => {
	let raw = await getComments(id);
	let commDB = Array.from(raw);
	let viewer = document.querySelector('.commentsDisplay');

	if (commDB.length === 0) {
    // viewer.innerHTML = 'Hi there 👋 - be the first to comment on this emoji';
    // viewer.style.color = 'yellow';
		console.log('None');
  } else {
    commDB.forEach((commentObj) => {
      viewer.innerHTML += `<p>${commentObj.creation_date} ${commentObj.username}: ${commentObj.comment}</p>`;
    });
  }	
};

const postComment = async (data) => {
	const clink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vne0sKL7BtYmXIhUvGK9/comments';

  await fetch(clink, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset= UTF-8',
    },
    body: JSON.stringify(data),
  });
};

const getComments = async (itemID = 0) => {
  const link = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vne0sKL7BtYmXIhUvGK9/comments?item_id=${itemID}`;

  const response = await fetch(link);
  const result = await response.json();

  return result;
};

module.exports = refreshComments;