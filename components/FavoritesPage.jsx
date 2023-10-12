const React = require('react');
const Layout = require('./Layout');

function FavoritesPage({ games, title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="card__container">
        {games.map((game) => (
          <div data-id={game.id} className="card" style={{ width: '18rem' }}>
            <img src={game.img} className="card-img-top" alt="game" />
            <div className="card-body">
              <h5 className="card-title">{game.title}</h5>
              {game.adult && <span>18+</span>}

              <a href={`/games/${game.id}`} className="btn btn-primary">
                More info
              </a>
              <button className="btn btn-danger btn-delete">delete</button>
              <button className="btn btn-info btn-remove-favorite">remove from favorites</button>
              <a href={`/games/form-update/${game.id}`} className="btn btn-warning btn-update">
                update
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = FavoritesPage;
