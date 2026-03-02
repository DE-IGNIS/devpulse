import { loadData } from "./storage.js";
import chalk from "chalk";

export function displaySummary(options) {
  const data = loadData();

  const currentDate = new Date().toISOString();
  let oldDate = new Date();

  oldDate.setDate(oldDate.getDate() - 7);
  oldDate = oldDate.toISOString();

  const summary = {
    hours_logged_in: 0,
    total_sessions: 0,
    hours_per_project: {},
  };

  data.forEach((element) => {
    if (element.date < currentDate && element.date > oldDate) {
      summary.hours_logged_in += element.hours;
      summary.total_sessions++;
      if (!summary.hours_per_project[element.project]) {
        summary.hours_per_project[element.project] = element.hours;
      } else {
        summary.hours_per_project[element.project] += element.hours;
      }
    }
  });

  console.log(chalk.green("✅ Summary logged!"));
  console.log(chalk.cyan(`Total Hours Logged in : ${summary.hours_logged_in}`));
  console.log(chalk.cyan(`Total Sessions : ${summary.total_sessions}`));
  console.log(chalk.cyan("Hours Per Project:"));

  let projectNames = Object.keys(summary.hours_per_project);

  projectNames.forEach((key) => {
    console.log(chalk.cyan(`${key} :${summary.hours_per_project[key]} `));
  });
}
