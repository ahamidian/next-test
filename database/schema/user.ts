import { int, mysqlTable, text } from 'drizzle-orm/mysql-core';
import { InferModel } from "drizzle-orm";

const users = mysqlTable('users', {
  id: int('id').primaryKey().autoincrement(),
  fullName: text('full_name'),
})

export type User = InferModel<typeof users>
export type InsertUser = InferModel<typeof users, 'insert'>

export default users;