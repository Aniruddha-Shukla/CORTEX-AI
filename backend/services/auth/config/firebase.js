import { cert, initializeApp } from "firebase-admin";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let serviceAccount;

if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  try {
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  } catch (err) {
    console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT env var:", err);
  }
}

if (!serviceAccount) {
  const localKeyPath = path.join(__dirname, "../serviceAccountKey.json");
  if (fs.existsSync(localKeyPath)) {
    serviceAccount = JSON.parse(fs.readFileSync(localKeyPath, "utf8"));
  } else {
    throw new Error(
      "Firebase service account key not found! Please set FIREBASE_SERVICE_ACCOUNT environment variable."
    );
  }
}

export const app = initializeApp({
  credential: cert(serviceAccount)
});