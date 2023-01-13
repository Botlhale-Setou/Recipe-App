const itemLike = async (itemId) => {
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vne0sKL7BtYmXIhUvGK9/likes/`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        item_id: itemId,
      }),
    }
  );
};
const likeCount = async (id) => {
  const likeEntries = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vne0sKL7BtYmXIhUvGK9/likes`
  );

  await likeEntries.json().then((likeEntry) => {
    const likeCounter = document.getElementById(`like-count${id}`);
    likeEntry.forEach((like) => {
      if (id === like.item_id) {
        likeCounter.innerHTML = `${like.likes}`;
      }
    });
  });
};

export { itemLike, likeCount };
