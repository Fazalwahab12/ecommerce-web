import { drizzle } from 'drizzle-orm/node-postgres';
import { InferModel,  } from 'drizzle-orm';
import {sql} from '@vercel/postgres'
import { integer, pgTable,  varchar } from "drizzle-orm/pg-core";



export let maketable  = pgTable("cartt", {
  
  user_Id: varchar("user_id" ,{length : 300}).notNull(),
  product_Id: varchar("product_id" ,{length : 300}).notNull(),
  quantity: integer("quantity").notNull(),
  price: integer("price").notNull(),
});


export type  typeoftable = InferModel<typeof maketable>;
export const db = drizzle(sql);