import chalk from "chalk";
import { loadData } from "./storage.js";

export function listSessions(options) {
  const data = loadData();

  if (data.length === 0) {
    console.log(chalk.green("Session list is empty!"));
    return;
  }

  let count = 0;

  console.log(chalk.green("✅ Listing all sessions!"));
  console.log("=========================================");
  data.forEach((element) => {
    count++;
    console.log(chalk.green(`✅ Session ${count}`));
    console.log(chalk.cyan(`   ID : ${element.id}`));
    console.log(chalk.cyan(`   Project   : ${element.project}`));
    console.log(chalk.cyan(`   Desc   : ${element.description}`));
    console.log(chalk.cyan(`   Date   : ${element.date}`));
    console.log(chalk.cyan(`   Hours   : ${element.hours}`));
    console.log("=========================================");
  });
}
