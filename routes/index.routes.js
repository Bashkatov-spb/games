const router = require('express').Router();

const mainRouter = require('./view/main.routes');
const gamesRouter = require('./view/games.routes');
const playersRouter = require('./view/players.routes');
const favoritesRouter = require('./view/favorites.routes');
const authRouter = require('./view/auth.routes');

const gamesApiRouter = require('./api/games.api.routes');
const favoritesApiRouter = require('./api/favorites.api.routes');
const authApiRouter = require('./api/auth.api.routes');

router.use('/', mainRouter);
router.use('/players', playersRouter);
router.use('/games', gamesRouter);
router.use('/auth', authRouter);
router.use('/favorites', favoritesRouter);

router.use('/api/games', gamesApiRouter);
router.use('/api/favorites', favoritesApiRouter);
router.use('/api/auth', authApiRouter);

module.exports = router;
