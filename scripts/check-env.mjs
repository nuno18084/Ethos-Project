import { existsSync, readFileSync } from "node:fs";

const required = [
  "VITE_EMAILJS_SERVICE_ID",
  "VITE_EMAILJS_TEMPLATE_ID",
  "VITE_EMAILJS_PUBLIC_KEY",
];

const fileEnv = existsSync(".env") ? readFileSync(".env", "utf8") : "";

function getValue(key) {
  const fromProcess = process.env[key]?.trim();
  if (fromProcess) return fromProcess;

  const match = fileEnv.match(new RegExp(`^${key}=(.*)$`, "m"));
  return match?.[1]?.trim() ?? "";
}

if (!fileEnv && required.every((key) => !process.env[key]?.trim())) {
  console.error("Deploy blocked: .env file not found.");
  console.error("Copy .env.example to .env and add your EmailJS credentials.");
  process.exit(1);
}

for (const key of required) {
  const value = getValue(key);

  if (!value || value.startsWith("your_")) {
    console.error(`Deploy blocked: ${key} is missing or still a placeholder.`);
    process.exit(1);
  }
}

console.log("Environment variables OK for production build.");
