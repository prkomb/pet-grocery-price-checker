export function checkEnvironment() {
  const requiredEnvVars = ["DATABASE_URL", "DIRECT_URL"];
  const missingVars = requiredEnvVars.filter(
    (varName) => !process.env[varName]
  );

  if (missingVars.length > 0) {
    console.error("Missing required environment variables:", missingVars);
    throw new Error(`Missing environment variables: ${missingVars.join(", ")}`);
  }

  console.log("Environment variables check passed");
}
