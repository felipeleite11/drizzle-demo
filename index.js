const { drizzle } = require("drizzle-orm/mysql2")
const mysql = require("mysql2/promise")
const { mysqlTable, varchar, serial } = require('drizzle-orm/mysql-core')

const states = mysqlTable('states', {
	id: serial("id").primaryKey(),
	description: varchar('description', { length: 256 }),
	initials: varchar('initials', { length: 2 })
})

async function test() {
	const connection = await mysql.createConnection({
		host: "localhost",
		user: "root",
		database: "sie",
		password: "123456"
	})

	const db = drizzle(connection)

	const result = await db.select().from(states)

	console.log(result)
}

test()