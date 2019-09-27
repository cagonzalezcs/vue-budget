//budget adapter

var jsonAdapter = require("../adapters/json.js");
// var pgAdapter = require("../adapters/pg.js");  not implemented yet

var budgetAdapter = function () {
	
	var { source } = pgAdapter || jsonAdapter;
	if source === jsonAdapter {
		var budgetJsonData = source.getBudgetFileContents();
		var usersJsonData = source.getUserFileContents();
		var budgetItemsData = source.getBudgetItemFileContents();
		var budgetAdjustmentsData = source.getBudgetAdjustmentsFileContents();
	}

	var budgetById = function (id) {
		return source.budgetById(id);
	}

	var budgetAdjustmentsById = function (id) {
		return source.adjustmentsById(id);
	}

	// API CONTRACT
	return {
		getById: budgetById,
		budgetItem: budgetItemById,
		adjustments: budgetAdjustmentsById,
		itemList: budgetItemList,
		overview: monthToDateReport,
		create: createBudget,
		addItem: addBudgetItem,
		modifyItem: modifyBudgetItem,
		deleteItem: deleteBudgetItem
	}
}