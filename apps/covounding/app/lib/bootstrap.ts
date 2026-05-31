import "dotenv/config";
import { stdin as input, stdout as output } from "node:process";
import readline from "node:readline/promises";
import { auth } from "./auth.server.js";

async function bootstrap() {
  const rl = readline.createInterface({ input, output });

  console.log("\n🛠️  CoVound Founder Bootstrapper");
  console.log("-------------------------------\n");

  const email = await rl.question("Founder Email: ");
  const password = await rl.question("Founder Password: ");
  const name = await rl.question("Founder Name (e.g. Gharis): ");

  console.log("\nCreating account...");

  try {
    const response = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });

    console.log("✅ Founder account created successfully!");
    console.log(`   User ID: ${response.user.id}`);
    console.log("   You can now sign in at http://localhost:5173/login");
  } catch (error: any) {
    console.error("\n❌ Failed to create account:");
    console.error(error.message || error);
  } finally {
    rl.close();
    process.exit(0);
  }
}

bootstrap();
