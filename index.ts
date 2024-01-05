import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { mysqlTable, varchar, serial } from 'drizzle-orm/mysql-core'

const states = mysqlTable('states', {
	id: serial('id').primaryKey(),
	description: varchar('description', { length: 256 }).notNull(),
	initials: varchar('initials', { length: 2 }).notNull()
})

async function test() {
	const connection = await mysql.createConnection({
		host: 'localhost',
		user: 'root',
		database: 'sie',
		password: '123456'
	})

	const db = drizzle(connection)

	const result = await db.select().from(states)

	console.log(result)
}

test()