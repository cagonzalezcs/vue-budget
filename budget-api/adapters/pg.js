//postgres adapter
//centralized spot for all postgres queries

const { pg } = require("../handlers/pg.js");

var pgAdapter => {

	var budgetById = (id) => {
		pg.query("select * from budget where associated_user_id = $1", [id])
		.then(res => {return res.rows})
		.catch(e => {console.error(e.stack); return {}});
	};

}