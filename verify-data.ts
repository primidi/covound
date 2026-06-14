import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  try {
    await client.connect();
    
    console.log("Listing all tables in public schema:");
    const tables = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';");
    console.table(tables.rows);
    
    try {
      const res = await client.query("SELECT count(*) FROM \"user\";");
      console.log(`User count in 'user' table: ${res.rows[0].count}`);
    } catch (e: any) {
      console.log("Could not query 'user' table:", e.message);
    }
  } catch (error) {
    console.error("Query failed:", error);
  } finally {
    await client.end();
  }
}

main();
