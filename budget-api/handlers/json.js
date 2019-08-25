var fs = require('fs');

var jsonHandler = function () {
	var userFileLocation = "../users/users.json";
	var budgetFileLocation = "../budget/budget.json";
	var budgetItemsFileLocation = "../budget/budget_items.json"
	var expenseFileLocation = "../expense/expense.json";
	var incomeFileLocation = "../income/income.json";

	var readJson = function (fileLocation) {
		return fs.readFileSync(fileLocation);
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