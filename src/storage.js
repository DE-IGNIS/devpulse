import fs from "fs";
import path from "path";
import os from "os";

const DATA_DIR = path.join(os.homedir(), ".devpulse");
const DATA_FILE = path.join(DATA_DIR, "data.json");

export function loadData() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, "[]");
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
}

export function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}