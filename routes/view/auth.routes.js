const RegistrationFormPage = require('../../components/RegistrationFormPage');
const AuthorizationFormPage = require('../../components/AuthorizationFormPage');

const router = require('express').Router();

router.get('/sign-up', (req, res) => {
  const html = res.renderComponent(RegistrationFormPage, { title: 'reg form' });
  res.send(html);
});
router.get('/sign-in', (req, res) => {
  const html = res.renderComponent(AuthorizationFormPage, { title: 'log form' });
  res.send(html);
});

// router.post('/sign-up', (req, res) => {
//   const { email, password } = req.body;
//   res.app.locals.user = { email, password };
//   console.log(res.app.locals);
//   res.json({ message: 'success' });
// });

module.exports = router;
