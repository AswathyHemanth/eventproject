import { mysqlTable, varchar, timestamp, int, text } from 'drizzle-orm/mysql-core';

export const userDataTable = mysqlTable('user_registeration', {
	id: int('id').primaryKey().autoincrement(),
	name: varchar('name', { length: 255 }).notNull(),
	email: varchar('email', { length: 255 }).notNull(),
	mobile: varchar('mobile', { length: 20 }).notNull(),
	password: varchar('password', { length: 255 }),
	confirmpassword: varchar('confirmpassword', { length: 255 }),
	createdAt: timestamp('created_at').defaultNow().notNull()
});
