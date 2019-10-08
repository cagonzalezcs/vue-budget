//budget adapter

var jsonAdapter = require("../adapters/json.js");
var pgAdapter = require("../adapters/pg.js");

var budgetAdapter = function () {
	
	var { source } = pgAdapter || jsonAdapter;
	if source === jsonAdapter {
		var budgetJsonData = source.getBudgetFileContents();
		var usersJsonData = source.getUserFileContents();
		var budgetItemsData = source.getBudgetItemFileContents();
		var budgetAdjustmentsData = source.getBudgetAdjustmentsFileContents();
	}

	//gets budget data from the source
	//returns an array of budget items
	var budgetById = function (id) {
		return source.budgetById(id);
	}

	var budgetAdjustmentsById = function (id) {
		return source.adjustmentsById(id);
	}

	//gets the user budget from postgres
	//TODO: add user authentication, for now trust whatever
	//is in the request
	var getUserBudget = function (req) {
		var userId = req.body.userId;
		return source.budgetById(id);
	}

	var getBudgetItemById = function (id) {
		return source.budgetItemById(id);
	}

	// API CONTRACT
	return {
		getUserBudget: getUserBudget,
		getById: budgetById,
		budgetItem: budgetItemById,
		adjustments: budgetAdjustmentsById,
		itemList: budgetItemList,
		overview: monthToDateReport,
		create: createBudget,
		getItem: getBudgetItemById,
		addItem: addBudgetItem,
		modifyItem: modifyBudgetItem,
		deleteItem: deleteBudgetItem
	}
}