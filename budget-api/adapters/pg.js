//postgres adapter
//centralized spot for all postgres queries

const { pg } = require("../handlers/pg.js");

var pgAdapter => {

	var budgetById = (id) => {
		pg.query("select * from budget where associated_user_id = $1", [id])
		.then(res => {return res.rows})
		.catch(e => {console.error(e.stack); return {}});
	};

	var adjustmentsByid = (id) => {
		pg.query("select * from adjustments where budget_id = $1", [id])
		.then(res => { return res.rows;})
		.catch(e => { console.error(e.stack); return {}});
	};

	var budgetItemById = (id) => {
		pg.query("select * from budget_items where id = $1", [id])
		.then(res => { return res.rows;})
		.catch(e => { console.error(e.stack); return {}});
	}

	var budgetItemsForABudget = (budget_id) => {
		pg.query("select * from budget_items where budget_id = $1", [budget_id])
		.then(res => {return res.rows;})
		.catch(e => { console.error(e.stack); return {}});
	};

	//these inner methods allow us to dictate what methods we make public
	//and allows us to match the JSON adapter
	var budgetMethods = {
		getBudgetById: budgetById,
	}

	//we return the pgAdapter as a set of interfaces to inner methods
	//this is really the key part to the postgres adapter:
	//identical operation on both sides, for seamless use
	return {
		users: userMethods,
		budget: budgetMethods,
		budget_items: budgetItemMethods,
		expense: ExpenseMethods,
		income: incomeMethods
	}

}