const router = require('express').Router();
const FavoritesPage = require('../../components/FavoritesPage');
const { Favorite, Player, Game } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const favorites = await Favorite.findAll({
      where: { player_id: req.session.user_id },
      include: { model: Game },
    });
    const games = favorites.map((favorite) => favorite.Game);
    const html = res.renderComponent(FavoritesPage, {
      title: 'favorites page',
      games,
    });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
