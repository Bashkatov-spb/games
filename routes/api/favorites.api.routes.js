const router = require('express').Router();
const { Favorite } = require('../../db/models');

router.post('/', async (req, res) => {
  console.log('-------');
  let result;
  try {
    const { id } = req.body;
    console.log(req.body);
    result = await Favorite.findOne({ where: { id, player_id: req.session.user_id } });
    if (result) {
      res.json({ message: 'Вы уже добавляли в избранное' });
      return;
    } else {
      result = await Favorite.create({ game_id: id, player_id: req.session.user_id });
      res.json({ message: 'success' });
      return;
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:gameId', async (req, res) => {
  try {
    const { gameId } = req.params;
    const result = await Favorite.destroy({
      where: { game_id: gameId, player_id: req.session.user_id },
    });
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
