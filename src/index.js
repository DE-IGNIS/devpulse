#!/usr/bin/env node
import { program } from "commander";
import { logSession } from "./log.js";

program
  .name("devpulse")
  .description("CLI Developer Productivity Tracker")
  .version("1.0.0");

program
  .command("log <description>")
  .description("Log a coding session")
  .option("-p , --project <project>", "Projet name")
  .option("-h , --hours <hours>", "Hours spent")
  .action(logSession);

program.parse();
