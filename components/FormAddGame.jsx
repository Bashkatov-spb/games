const React = require('react');
const Layout = require('./Layout');

function FormAddGame({ title }) {
  return (
    <div className="container">
      <form method="POST" id="add-game">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input name="title" type="text" className="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input name="description" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Img
          </label>
          <input name="img" type="file" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label>for adult?</label>
          <input name="adult" type="checkbox" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

module.exports = FormAddGame;
