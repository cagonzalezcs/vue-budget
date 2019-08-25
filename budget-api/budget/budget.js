//budget adapter

var jsonAdapter = require("../handlers/json.js");
// var pgAdapter = require("../handlers/pg.js");  not implemented yet

var budgetAdapter = function () {
	
	var source = pgAdapter || jsonAdapter;
	if source === jsonAdapter {
		var budgetJsonData = source.getBudgetFileContents();
		var usersJsonData = source.getUserFileContents();
		var budgetItemsData = source.getBudgetItemFileContents();
		var budgetAdjustmentsData = source.getBudgetAdjustmentsFileContents();
	}

	var budgetById = function (id) {
		if (source === jsonAdapter) {
			return jsonAdapter.budgetById(id);
		}
		else {
			return pgAdapter.budgetById(id);
		}
	}

	var budgetAdjustmentsById = function (id) {
		if (source === jsonAdapter) {

		}
		else {
			return pgAdapter.adjustmentsById(id);
		}
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