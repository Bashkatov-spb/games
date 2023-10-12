const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Player } = require('../../db/models');

router.post('/sign-up', async (req, res) => {
  let player;
  try {
    const { name, email, avatar, age, password } = req.body;
    if (name.trim() && email.trim() && avatar.trim() && age.trim() && password.trim()) {
      player = await Player.findOne({ where: { email } });
      if (!player) {
        const hash = await bcrypt.hash(password, 10);
        player = await Player.create({ name, email, avatar, age, password: hash });
        req.session.user_id = player.id;
      } else {
        res.json({ message: 'Такой емайл уже занЯТ!!' });
        return;
      }
    } else {
      res.json({ message: 'Заполните все опля!!' });
      return;
    }

    res.json({ message: 'success' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/logout', (req, res) => {
  // удаление сессии на сервере
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }

    res
      .clearCookie('user_sid') // серверное удаление куки по имени
      .redirect('/');
  });
});

router.post('/sign-in', async (req, res) => {
  let player;
  try {
    const { email, password } = req.body;
    if (email.trim() && password.trim()) {
      player = await Player.findOne({ where: { email } });
      if (player && (await bcrypt.compare(password, player.password))) {
        req.session.user_id = player.id;
        res.json({ message: 'success' });
        return;
      } else {
        res.json({ message: 'Неправильный логин или пароль' });
        return;
      }
    } else {
      res.json({ message: 'Заполните все опля!!' });
      return;
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
