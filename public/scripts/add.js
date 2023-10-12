const formAddGame = document.querySelector('#add-game');

if (formAddGame) {
  formAddGame.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { title, description, img, adult } = e.target;
    // console.log(title.value, description.value, img.value, adult.checked);
    const res = await fetch('/api/games', {
      method: 'POST',
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
      formAddGame.reset();
      document.querySelector('.card__container').insertAdjacentHTML('beforeend', data.html);
    }
  });
}
