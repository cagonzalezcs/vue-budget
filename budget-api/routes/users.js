var express = require('express');
var router = express.Router();

/*
nessary functions:

[ ] get user token
[ ] get user details
[ ] get user budgets
[ ] get user expenses
[ ] get user income

[ ] add user
[ ] add user to budget (for shared budgets)
[ ] add budget to user
[ ] add expenses to user
[ ] add income to user

[ ] change user info

[ ] delete user
[ ] delete user budget
*/

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
