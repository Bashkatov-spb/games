const formAddGame = document.querySelector('#add-game');

if (formAddGame) {
  formAddGame.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { title, description, img, adult } = e.target;
    const formData = new FormData();
    console.log(img.files[0]);
    formData.append('img', img.files[0]);
    formData.append('title', title.value);
    formData.append('description', description.value);
    formData.append('adult', adult.checked);

    const res = await fetch('/api/games', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    if (data.message === 'success') {
      formAddGame.reset();
      document.querySelector('.card__container').insertAdjacentHTML('beforeend', data.html);
    }
  });
}
