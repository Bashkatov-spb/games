const btn = document.querySelector('.version');

if (btn) {
  btn.addEventListener('click', async (e) => {
    const res = await fetch('/version');
    const data = await res.json();
    e.target.innerHTML = data.version;
  });
}
