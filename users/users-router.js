const router = require('express').Router();
const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');
const checkRole = require('../auth/check-role-middleware')

router.get('/', restricted, checkRole('Admin'), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/something', restricted, checkRole('Student'), checkRole('Tutor'), (req, res) => {
  //do something here
  //this code will fail if user is not student and tutor
  //need to write code to check if the user has either role or both
})

module.exports = router;
