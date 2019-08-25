var jsonHandler = require('../handlers/json.js');

var jsonAdapter = function () {
	var budgetData = jsonHandler.getBudgetFileContents();
	var userData = jsonHandler.getUserFileContents();

	//get budget data by ID
	var budgetDataById = function (id) {
		return _.filter(budgetData, {associated_user_id: id});
	}

	//get budget adjustments
}