const gameFormUpdate = document.querySelector('#update-game');

if (gameFormUpdate) {
  gameFormUpdate.addEventListener('submit', async (e) => {
    const { title, description, img, adult } = e.target;
    const { id } = gameFormUpdate.dataset;
    const res = await fetch(`/api/games/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title: title.value,
        description: description.value,
        img: img.value,
        adult: adult.checked,
      }),
    });
    const data = await res.json();
    if (data.message === 'success') {
      window.location.assign('/games');
    } else {
      alert(data.message);
    }
  });
}
