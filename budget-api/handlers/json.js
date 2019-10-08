var fs = require('fs');

// jsonHandler simplifies the process of working with json by
// abstracting some of the lower level concerns like file loading and saving
// this allows us to use the json files as a data store without additional overhead
var jsonHandler = function () {
	var userFileLocation = "../users/users.json";
	var budgetFileLocation = "../budget/budget.json";
	var budgetItemsFileLocation = "../budget/budget_items.json";
	var budgetAdjustmentFileLocation = "../budget/budget_adjustments.json";
	var expenseFileLocation = "../expense/expense.json";
	var incomeFileLocation = "../income/income.json";

	var readJson = function (fileLocation) {
		return fs.readFileSync(fileLocation);
	}

	var writeJson = function (fileLocation, data) {
		fs.writeFileSync(fileLocation, data);
	}

	var getUserFileContents = function () {
		return readJson(userFileLocation);
	}

	var getBudgetFileContents = function () {
		return readJson(budgetFileLocation);
	}

	var getBudgetItemsFileContents = function () {
		return readJson(budgetItemsFileLocation);
	}

	var getBudgetAdjustmentFileContents = function () {
		return readJson(budgetAdjustmentFileLocation);
	}

	var getExpenseFileContents = function () {
		return readJson(expenseFileLocation);
	}

	var getIncomeFileContents = function () {
		return readJson(incomeFileLocation);
	}

	return {
		users: getUserFileContents,
		budget: getBudgetFileContents,
		budget_items: getBudgetItemsFileContents,
		expense: getExpenseFileContents,
		income: getIncomeFileContents
	}
}