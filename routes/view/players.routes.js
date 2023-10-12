const router = require('express').Router();
const { Player } = require('../../db/models');
const PlayersPage = require('../../components/PlayersPage');

router.get('/', async (req, res) => {
  try {
    const players = await Player.findAll();
    const html = res.renderComponent(PlayersPage, {
      title: 'players Page',
      players,
    });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
