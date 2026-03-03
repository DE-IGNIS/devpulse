import chalk from "chalk";
import { loadData } from "./storage.js";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome(dataPresent) {
  const rainbowTitle = chalkAnimation.rainbow(`Listing all coding sessions!`);
  const spinner = createSpinner("Loading....").start();

  await sleep();

  if (dataPresent) {
    spinner.success({ text: `List generated` });
  } else {
    process.exit(1);
  }
  rainbowTitle.stop();
}

export async function listSessions(options) {
  const data = loadData();
  const dataPresent = true;

  if (data.length === 0) {
    console.log(chalk.green("Session list is empty!"));
    dataPresent = false;
    return;
  }

  let count = 0;

  await welcome(dataPresent);
  // rainbowTitle.stop();
  // console.log(chalk.bgGreen(chalk.red(`✅ Listing all sessions!`)));

  console.log("=========================================");
  data.forEach((element) => {
    count++;
    console.log(chalk.green(`✅ Session ${count}`));
    console.log(chalk.cyan(`ID       : ${element.id}`));
    console.log(chalk.cyan(`Project  : ${element.project}`));
    console.log(chalk.cyan(`Desc     : ${element.description}`));
    console.log(chalk.cyan(`Date     : ${element.date}`));
    console.log(chalk.cyan(`Hours    : ${element.hours}`));
    console.log("=========================================");
  });
}
