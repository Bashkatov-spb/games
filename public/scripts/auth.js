const signUpForm = document.querySelector('#sign-up');
const signInForm = document.querySelector('#sign-in');

if (signUpForm) {
  signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, email, avatar, age, password } = e.target;
    const res = await fetch('/api/auth/sign-up', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        avatar: avatar.value,
        age: age.value,
        password: password.value,
      }),
    });
    const data = await res.json();

    if (data.message === 'success') {
      window.location.assign('/');
    } else {
      document.querySelector('.error').innerHTML = data.message;
    }
  });
}

if (signInForm) {
  signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const res = await fetch('/api/auth/sign-in', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();

    if (data.message === 'success') {
      window.location.assign('/');
    } else {
      document.querySelector('.error').innerHTML = data.message;
    }
  });
}
