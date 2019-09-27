//postgres adapter
//centralized spot for all postgres queries

const { pg } = require("../handlers/pg.js");

var pgAdapter => {

	var budgetById = (id) => {
		return pg.query("select * from budget where id = $1", [id])
	}

}