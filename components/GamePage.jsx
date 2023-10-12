const React = require('react');
const Layout = require('./Layout');

function GamePage({ title, game, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="card" style={{ width: '18rem' }}>
        <img src={game.img} className="card-img-top" alt="game" />
        <div className="card-body">
          <h5 className="card-title">{game.title}</h5>
          {game.adult && <span>18+</span>}
          <p>{game.description}</p>
          <a href="#" className="btn btn-primary">
            More info
          </a>
        </div>
      </div>
    </Layout>
  );
}

module.exports = GamePage;
