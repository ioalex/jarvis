#!/usr/bin/env node
const inquirer = require("inquirer");
const colors = require("colors");

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
});

inquirer
  .prompt([
    {
      type: "list",
      message: colors.cyan("🎩: Welcome, what can I do for you sir?"),
      name: "opening",
      choices: ["Start a new project", "Just came to say hi..."],
    },
  ])
  .then((answers) => {
    answers.opening;
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
