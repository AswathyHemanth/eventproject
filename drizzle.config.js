import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./src/lib/server/db/schema.js",
  out: "./drizzle/migrations",
  dialect: "mysql",
  dbCredentials: {
    host: 'localhost',
    user: 'root',
    password:"Aswathy@11",
    database: 'test',
  }
});