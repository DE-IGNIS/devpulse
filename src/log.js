import chalk from "chalk";
import { loadData, saveData } from "./storage.js";

export function logSession(description, options) {
  const data = loadData();

  const entry = {
    id: Date.now(),
    description,
    project: options.project || "general",
    hours: parseFloat(options.hours) || 1,
    date: new Date().toISOString(),
  };

  data.push(entry);
  saveData(data);

  console.log(chalk.green("✅ Session logged!"));
  console.log(chalk.cyan(`   Project : ${entry.project}`));
  console.log(chalk.cyan(`   Date   : ${entry.date}`));
  console.log(chalk.cyan(`   Notes   : ${entry.description}`));
  console.log(chalk.cyan(`   Hours   : ${entry.hours}`));
}
