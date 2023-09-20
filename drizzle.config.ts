import { type Config } from "drizzle-kit";

import { env } from "@/env.mjs";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "mysql2",
  out: "./drizzle",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config;
