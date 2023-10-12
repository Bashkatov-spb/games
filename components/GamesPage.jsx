const React = require('react');
const Layout = require('./Layout');
const FormAddGame = require('./FormAddGame');
const GameItem = require('./GameItem');

function GamesPage({ title, games = [], user }) {
  return (
    <Layout title={title} user={user}>
      <h2>Games Page</h2>
      {user && <FormAddGame />}
      <div className="card__container">
        {games.map((game) => (
          <GameItem game={game} user={user} />
        ))}
      </div>
    </Layout>
  );
}
module.exports = GamesPage;
