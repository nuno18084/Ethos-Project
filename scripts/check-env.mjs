import { existsSync, readFileSync } from "node:fs";

const required = [
  "VITE_EMAILJS_SERVICE_ID",
  "VITE_EMAILJS_TEMPLATE_ID",
  "VITE_EMAILJS_PUBLIC_KEY",
];

if (!existsSync(".env")) {
  console.error("Deploy blocked: .env file not found.");
  console.error("Copy .env.example to .env and add your EmailJS credentials.");
  process.exit(1);
}

const env = readFileSync(".env", "utf8");

for (const key of required) {
  const match = env.match(new RegExp(`^${key}=(.*)$`, "m"));
  const value = match?.[1]?.trim();

  if (!value || value.startsWith("your_")) {
    console.error(`Deploy blocked: ${key} is missing or still a placeholder.`);
    process.exit(1);
  }
}

console.log("Environment variables OK for production build.");
