import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

const poolConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:"Aswathy@11",
    database: 'test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export const db = drizzle(poolConnection);