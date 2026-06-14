import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  try {
    await client.connect();
    const res = await client.query("SELECT datname FROM pg_database WHERE datistemplate = false;");
    console.log("Databases found:");
    console.table(res.rows);
    
    const schemas = await client.query("SELECT schema_name FROM information_schema.schemata;");
    console.log("Schemas in current database:");
    console.table(schemas.rows);
  } catch (error) {
    console.error("Query failed:", error);
  } finally {
    await client.end();
  }
}

main();
