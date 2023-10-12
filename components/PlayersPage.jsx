const React = require('react');
const Layout = require('./Layout');

function PlayersPage({ title, players = [], user }) {
  return (
    <Layout title={title} user={user}>
      <h2>players Page</h2>
      <div className="card__container">
        {players.map((player) => (
          <div className="card" style={{ width: '18rem' }}>
            <img src={player.avatar} className="card-img-top" alt="game" />
            <div className="card-body">
              <h5 className="card-title">{player.name}</h5>
              <h6>{player.email}</h6>

              <a href={`/players/${player.id}`} className="btn btn-primary">
                More info
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
module.exports = PlayersPage;
