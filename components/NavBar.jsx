const React = require('react');

function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/players">
              Players
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/games">
              Games
            </a>
          </li>

          {user ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="/favorites">
                  Favorites
                </a>
              </li>
              <li>Hello, {user.name}!</li>
              <li className="nav-item">
                <a className="nav-link" href="/api/auth/logout">
                  LogOut
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link" href="/auth/sign-up">
                  Sign-Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/auth/sign-in">
                  Sign-In
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

module.exports = NavBar;
