var express = require('express');
var router = express.Router();
var budget = require('../budget/budget.js');


/*
necessary functions:

[ ] get a budget for a user
[ ] get budget adjustments for a user
[ ] get a budget item for a budget
[ ] get a budget overview
[ ] get a filtered budget overview

[ ] add a budget for a user
[ ] add a budget item to a budget

[ ] change a budget item

[ ] delete a budget item
 */

/*GET budget listing. */
router.get('/', function (req, res, next) {
	//fetch budget for the currently logged in user and return it
});

//get budget for a user id
router.get('/:user_id', function (req, res, next) {
	res.json(budget.getById(req.params.user_id));
});

router.get('/adjustments/:user_id', function (req, res, next) {
	res.json(budget.adjustments(req.params.user_id));
});

router.get('')
module.exports = router;