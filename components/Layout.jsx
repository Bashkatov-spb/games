const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        /> */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>
        <link href="/styles/style.css" rel="stylesheet" />
        <script defer src="/scripts/script.js" />
        <script defer src="/scripts/add.js" />
        <script defer src="/scripts/deleteAndFavorite.js" />
        <script defer src="/scripts/update.js" />
        <script defer src="/scripts/auth.js" />
        <script defer src="/scripts/version.js" />
      </head>
      <body>
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
};
