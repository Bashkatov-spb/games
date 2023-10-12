const router = require('express').Router();
const GameItem = require('../../components/GameItem');
const { Game } = require('../../db/models');

router.get('/', async (req, res) => {
  const games = await Game.findAll();
  res.json(games);
});

// router.get('/:gameId', async (req, res) => {
//   const { gameId } = req.params;
//   const game = await Game.findOne({ where: { id: gameId } });
//   res.json(game);
// });

router.post('/', async (req, res) => {
  try {
    const { title, description, img, adult } = req.body;
    const game = await Game.create({
      title,
      description,
      img,
      adult,
      player_id: req.session.user_id,
    });
    const html = res.renderComponent(GameItem, { game }, { htmlOnly: true });
    res.json({
      message: 'success',
      html,
    });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:gameId', async (req, res) => {
  try {
    const { gameId } = req.params;
    const { title, description, img, adult } = req.body;
    const [result] = await Game.update(
      { title, description, img, adult },
      { where: { id: gameId, player_id: req.session.user_id } }
    );
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'false' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:gameId', async (req, res) => {
  try {
    const { gameId } = req.params;
    const result = await Game.destroy({ where: { id: gameId, player_id: req.session.user_id } });
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'false' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
