#!/usr/bin/env node
const inquirer = require("inquirer");
const colors = require("colors");
const open = require("open");

colors.setTheme({
  silly: "rainbow",
  input: "grey",
  verbose: "cyan",
  prompt: "grey",
  info: "green",
  data: "grey",
  help: "cyan",
  warn: "yellow",
  debug: "blue",
  error: "red",
  hello: "cyan",
});

function partyTime() {
  console.log("🎩: LET'S GET THIS PAAARRRTTTYYYY STARTED!".silly);
  open("https://www.youtube.com/watch?v=9osbpEHvQVE");
  console.log("🎩: WAAHHHHOOOOOO!!".silly);
  console.log("You passed out...".error);
  exitProgram();
}

function exitProgram() {
  console.log("🎩: Very well sir. Farewell!".warn);
  process.exit();
}

inquirer
  .prompt([
    {
      type: "list",
      message: "🎩: Welcome, what can I do for you sir?".hello,
      name: "opening",
      choices: ["Start a new project", "PAARRRTY!", "Just came to say hi..."],
    },
  ])
  .then((answers) => {
    if (answers.opening === "Start a new project") {
    } else if (answers.opening === "PAARRRTY!") {
      partyTime();
    } else {
      exitProgram();
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
