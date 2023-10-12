const React = require('react');

function GameItem({ game, user }) {
  const result = game.Favorites?.filter((favorite) => favorite.player_id === user?.id);

  return (
    <div data-id={game.id} className="card" style={{ width: '18rem' }}>
      <img src={game.img} className="card-img-top" alt="game" />
      <div className="card-body">
        <h5 className="card-title">{game.title}</h5>
        {game.adult && <span>18+</span>}

        <a href={`/games/${game.id}`} className="btn btn-primary">
          More info
        </a>
        {result?.length === 0 && (
          <button className="btn btn-info btn-favorite">add favorites</button>
        )}
        {game.player_id === user?.id && (
          <>
            <button className="btn btn-danger btn-delete">delete</button>
            <a href={`/games/form-update/${game.id}`} className="btn btn-warning btn-update">
              update
            </a>
          </>
        )}
      </div>
    </div>
  );
}

module.exports = GameItem;
