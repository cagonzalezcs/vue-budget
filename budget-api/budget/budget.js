var jsonAdapter = require("../handlers/json.js");
// var pgAdapter = require("../handlers/pg.js");  not implemented yet

var budgetAdapter = function () {
	
	var source = pgAdapter || jsonAdapter;
	if source === jsonAdapter {
		var budgetJsonData = source.getBudgetFileContents();
		var usersJsonData = source.getUserFileContents();
		var budgetItemsData = source.getBudgetItemFileContents();
	}

	var budgetById = function (id) {
		if (source === jsonAdapter) {
			return _.filter(budgetJsonData, {associated_user_id: id});
		}
		else {
			return pgAdapter.budgetById(id);
		}
	}

	// API CONTRACT
	return {
		getById: budgetById,
		budgetItem: budgetItemById,
		itemList: budgetItemList,
		overview: monthToDateReport,
		create: createBudget,
		addItem: addBudgetItem,
		modifyItem: modifyBudgetItem,
		deleteItem: deleteBudgetItem
	}
}