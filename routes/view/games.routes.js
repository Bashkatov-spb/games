const router = require('express').Router();

const GamesPage = require('../../components/GamesPage');
const GamePage = require('../../components/GamePage');
const { Game, Favorite } = require('../../db/models');
const GameItem = require('../../components/GameItem');
const FormUpdateGamePage = require('../../components/FormUpdateGamePage');

router.get('/', async (req, res) => {
  try {
    const games = await Game.findAll({ include: { model: Favorite } });
    const html = res.renderComponent(GamesPage, { title: 'Games page', games });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:gameId', async (req, res) => {
  try {
    const { gameId } = req.params;
    const game = await Game.findOne({ where: { id: gameId } });
    const html = res.renderComponent(GamePage, { title: 'Game page', game });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/form-update/:gameId', async (req, res) => {
  try {
    const { gameId } = req.params;
    const game = await Game.findOne({ where: { id: gameId } });
    const html = res.renderComponent(FormUpdateGamePage, {
      title: 'Form update',
      game,
    });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
