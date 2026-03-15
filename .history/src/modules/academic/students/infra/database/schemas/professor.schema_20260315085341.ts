import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const professorsSchema = pgTable("professors", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
});