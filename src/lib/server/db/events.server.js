import { mysqlTable, varchar, timestamp, int, text } from 'drizzle-orm/mysql-core';

export const userDataTable = mysqlTable('events_table', {
	id: int('id').primaryKey().autoincrement(),
	ename: varchar('name', { length: 255 }).notNull(),
	time: varchar('email', { length: 255 }).notNull(),
	location: varchar('mobile', { length: 20 }).notNull(),
	description: varchar('password', { length: 255 }),
	createdAt: timestamp('created_at').defaultNow().notNull()
});
