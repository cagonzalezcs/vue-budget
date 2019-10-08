var express = require('express');
var router = express.Router();
var budget = require('../budget/budget.js');


/*
necessary functions:
[X] get the budget for the currently logged in user
[X] get a budget for a user
[X] get budget adjustments for a user
[X] get a budget item for a budget
[ ] get a budget overview             //TODO: What is a budget overview?
[ ] get a filtered budget overview

[ ] add a budget for a user
[ ] add a budget item to a budget

[ ] change a budget item

[ ] delete a budget item
 */

/*GET budget listing. */
//TODO: add error checking in case of DB errors
router.get('/', function (req, res, next) {
	//fetch budget for the currently logged in user and return it
	res.json(budget.getUserBudget(req));
});

//get budget for a user id
router.get('/:user_id', function (req, res, next) {
	res.json(budget.getById(req.params.user_id));
});

//get budget adjustments for a user
router.get('/adjustments/:user_id', function (req, res, next) {
	res.json(budget.adjustments(req.params.user_id));
});

//get a budget item from a budget
router.post('/budget_item/:item_id', function (req, res, next) {
	res.json(budget.getItem(req.params.item_id));
});

router.get('')
module.exports = router;