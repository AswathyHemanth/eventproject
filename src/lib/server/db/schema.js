import { mysqlTable, varchar, timestamp, int, text } from 'drizzle-orm/mysql-core';

export const userDataTable = mysqlTable('user_registeration', {
	id: int('id').primaryKey().autoincrement(),
	name: varchar('name', { length: 255 }).notNull(),
	email: varchar('email', { length: 255 }).notNull(),
	mobile: varchar('mobile', { length: 20 }).notNull(),
	password: varchar('password', { length: 255 }),
	createdAt: timestamp('created_at').defaultNow().notNull()
});

export const eventTable = mysqlTable('events_table', {
	id: int('id').primaryKey().autoincrement(),
	userid:varchar('userid', { length: 255 }),
	img:varchar('img', { length: 255 }),
	ename: varchar('name', { length: 255 }).notNull(),
	time: varchar('time', { length: 255 }).notNull(),
	location: varchar('location', { length: 20 }).notNull(),
	description: varchar('description', { length: 20 }).notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull()
});