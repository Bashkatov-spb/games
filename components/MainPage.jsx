const React = require('react');
const Layout = require('./Layout');

function Home({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <h1>Main page</h1>
        <img
          style={{ width: '600px', margin: '0 auto', borderRadius: '20px' }}
          src="https://www.scenichudson.org/wp-content/uploads/2021/05/Red-Fox-Kits_Orange-County_Michael-Mazzuca-Photography_@photosbyzuc_IMG_5913-1400x795.jpg"
          alt=""
        />
        <button className="btn btn-danger version">Get Version</button>
      </div>
    </Layout>
  );
}

module.exports = Home;
