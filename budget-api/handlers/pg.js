
/*
PG handler is a high level abstraction over the 
postgreSQL instance

Most likely using http://github.com/brianc/node-postgres
 */

const { Pool } = require('pg');
const pool = new Pool();

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

var pgHandler = function () {

	//check pool health
	var poolCheck => {
		return pool.totalCount >= 0;
	}

	//check out a client
	var runQuery = (userQuery, userParams) => {
		pool.connect()
			.then(client => {
				return client.query(userQuery, userParams)
				.then(res => {
					client.release()
				})
				.catch(e => {
					client.release()
					console.log(err.stack)
				})
			})
	}
	
	return {
		status: poolCheck,
		query: runQuery
	}
}