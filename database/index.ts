import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import { migrate } from "drizzle-orm/planetscale-serverless/migrator";

// create the connection
const connection = connect({
  url: "mysql://57ytfo5dl0ttyh0x2wnm:pscale_pw_3AXeDHX1ubuHkzkRia1is6bZwXzz94YTkikLImpOa4h@aws.connect.psdb.cloud/next-test"
});

const db = drizzle(connection);

migrate(db, { migrationsFolder: "database/migrations" });

export default db;