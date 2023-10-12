const React = require('react');
const Layout = require('./Layout');

function FormUpdateGamePage({ title, game }) {
  return (
    <Layout title={title}>
      <div className="container">
        <form data-id={game.id} id="update-game">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              defaultValue={game.title}
              name="title"
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              defaultValue={game.description}
              name="description"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Img
            </label>
            <input
              defaultValue={game.img}
              name="img"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label>for adult?</label>
            <input name="adult" type="checkbox" checked={game.adult} />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = FormUpdateGamePage;
