#!/usr/bin/env node

// TODO: Debug prompts!

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

function partyHandler() {
  console.log("🎩: LET'S GET THIS PAAARRRTTTYYYY STARTED!".silly);
  open("https://www.youtube.com/watch?v=9osbpEHvQVE");
  console.log("🎩: WAAHHHHOOOOOO!!".silly);
  console.log("Glug glug glug glug...".warn);
  console.log("You passed out...".error);
  exitHandler();
}

function exitHandler() {
  console.log("🎩: Very well sir. Farewell!".warn);
  process.exit();
}

function errorHandler() {
  console.log("🎩: Something went wrong...".error);
  console.log("🎩: Try calling for me again".error);
  process.exit();
}

// Initial prompt
inquirer
  .prompt([
    {
      type: "list",
      name: "opening",
      message: "🎩: Welcome, what can I do for you sir?".hello,
      choices: ["Start a new project", "PAARRRTY!", "Just came to say hi..."],
    },
  ])
  .then((opening) => {
    if (opening === "Start a new project") {
      startNewProject();
    } else if (opening === "PAARRRTY!") {
      partyHandler();
    } else {
      exitHandler();
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      errorHandler();
    }
  });

// Second Prompt
function startNewProject() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "projectName",
        message: "🎩: Very well sir! What will be the name of your project?"
          .info,
      },
    ])
    .then((projectName) => {
      const name = projectName.projectName;
      console.log(`Ahh ${name}, that's a great name!`);
      setProjectDirectory();
    })
    .catch((error) => {
      if (error.isTtyError) {
        errorHandler();
      }
    });
}

// Third Prompt
// function setProjectDirectory() {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "projectDirectory",
//         message: "🎩: Now, where do you want to save your project?".info,
//       },
//     ])
//     .then((projectDirectory) => {
//       const name = projectDirectory.projectDirectory;
//       console.log(`Ahh ${name}, that's a great name!`);
//     })
//     .catch((error) => {
//       if (error.isTtyError) {
//         errorHandler();
//       }
//     });
// }

// Fourth Prompt
// function whatFramework() {
//   inquirer
//     .prompt([
//       {
//         type: "confirm",
//         name: "framework",
//         message: "🎩: Very well sir! Are you using a framework?".info,
//       },
//     ])
//     .then((answers) => {
//       if ((answers.framework = "No")) {
//         selectTools();
//       } else {
//         console.log("🎩: Sorry sire, this function has been written yet.".warn);
//         exitHandler();
//       }
//     })
//     .catch((error) => {
//       if (error.isTtyError) {
//         errorHandler();
//       }
//     });
// }

// Fifth Prompt
// function selectTools() {
//   inquirer
//     .prompt([
//       {
//         type: "checkbox",
//         name: "tools",
//         message: "🎩: What will you be using in your project?".info,
//         choices: [
//           new inquirer.Separator("--- Formatters & Linters ---"),
//           "Prettier",
//           "ESLint",
//           new inquirer.Separator("--- CSS Preprocessors ---"),
//           "SCSS",
//           new inquirer.Separator("--- Build Tools ---"),
//           "Gulp",
//           new inquirer.Separator("--- Templating Engines ---"),
//           "Nunjucks",
//         ],
//       },
//     ])
//     .then((answers) => {})
//     .catch((error) => {
//       if (error.isTtyError) {
//         errorHandler();
//       }
//     });
// }
