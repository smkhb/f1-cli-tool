#!/usr/bin/env node
import chalk from "chalk";
import { input, select } from "@inquirer/prompts";
import { mind, retro, summer, pastel, instagram } from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName;

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
let points = 0;

async function welcome() {
  figlet(
    "Welcome \n to the \n F1 Quiz",
    {
      font: "Ghost",
      horizontalLayout: "fitted",
      whitespaceBreak: true,
      width: 80,
      height: 60,
    },
    function (err, data) {
      if (err) {
        console.error("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(pastel(data));
    }
  );

  await sleep(2000);

  console.log(`
    ${chalk.red.bold("GET READY FOR TEST YOUR F1 KNOWLEDGE!")}
    ${chalk.green.italic("This quiz will challenge your understanding of:")}
    ${chalk.yellow.underline("Sport, its history, and its stars.")}
    `);

  await sleep(2000);
}

async function rules() {
  console.log(chalk.bold(mind("RULES OF THE GAME:")));
  console.log(retro("1. Each question will have multiple-choice answers."));
  console.log(summer("2. You must select the correct answer to score points."));
  console.log(pastel("3. Each question is worth 5 points."));
  console.log(instagram("4. Your final score will be displayed at the end.\n"));
  await sleep(2000);
}

async function askName() {
  playerName = await input({
    message: "What is your name?",
    default() {
      return "Franz Hermann";
    },
  });
  const nameRainbow = chalkAnimation.rainbow(
    `\nWelcome to the F1 Challenge, ${playerName}!\n`
  );
  await sleep(2000);
  nameRainbow.stop();

  console.log(chalk.yellow("Let's get started with the quiz!\n"));
  await sleep(2000);
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner().start({
    text: "FIA is checking your answer...",
  });
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Correct answer ${playerName}!` });
    points += 5;
  } else {
    spinner.error({
      text: `Wrong answer ${playerName}. Better luck next time!`,
    });
  }
}

async function position() {
  switch (points) {
    case 25:
      console.log(chalk.green.bold(`\nCongratulations ${playerName}!`));
      console.log(chalk.blue("You scored a perfect 25 points!"));
      console.log(chalk.yellow("You are the F1 Champion!"));
      break;
    case 20:
      console.log(chalk.green.bold(`\nGreat job ${playerName}!`));
      console.log(chalk.blue(`You scored ${points} points!`));
      console.log(chalk.yellow("You are a true F1 fan!"));
      break;
    case 15:
      console.log(chalk.green.bold(`\nGood effort ${playerName}!`));
      console.log(chalk.blue(`You scored ${points} points!`));
      console.log(chalk.yellow("Keep following F1!"));
      break;
    case 10:
      console.log(chalk.red.bold(`\nBetter luck next time, ${playerName}.`));
      console.log(chalk.blue(`You scored only ${points} points.`));
      console.log(chalk.yellow("Don't give up, keep learning about F1!"));
      break;
    case 5:
      console.log(chalk.red.bold(`\nOh no, ${playerName}!`));
      console.log(chalk.blue(`You scored only ${points} points.`));
      console.log(chalk.yellow("Maybe F1 isn't your thing?"));
      break;
    default:
      console.log(chalk.red.bold(`\nSorry ${playerName},`));
      console.log(chalk.blue("You d``idn't score any points."));
      console.log(chalk.yellow("Better luck next time!"));
      break;
  }
}

async function question1() {
  const q1 = await select({
    message: "Who's the youngest F1 World Champion?",
    choices: [
      {
        name: "Max Verstappen",
        value: "Max Verstappen",
        short: "Max Verstappen",
      },
      {
        name: "Sebastian Vettel",
        value: "Sebastian Vettel",
        short: "Sebastian Vettel",
      },
      {
        name: "Michael Schumacher",
        value: "Michael Schumacher",
        short: "Michael Schumacher",
      },
      {
        name: "Fernando Alonso",
        value: "Fernando Alonso",
        short: "Fernando Alonso",
      },
    ],
  });
  return handleAnswer(q1 === "Sebastian Vettel");
}

async function question2() {
  const q2 = await select({
    message: "Which driver has the nickname 'Honey Badger'?",
    choices: [
      {
        name: "Charles Leclerc",
        value: "Charles Leclerc",
        short: "Charles Leclerc",
      },
      {
        name: "Lando Norris",
        value: "Lando Norris",
        short: "Lando Norris",
      },
      {
        name: "Daniel Ricciardo",
        value: "Daniel Ricciardo",
        short: "Daniel Ricciardo",
      },
      {
        name: "Oliver Bearman",
        value: "Oliver Bearman",
        short: "Oliver Bearman",
      },
    ],
  });

  return handleAnswer(q2 === "Daniel Ricciardo");
}

async function question3() {
  const q3 = await select({
    message:
      "Which team did Michael Schumacher win his first championship with?",
    choices: [
      {
        name: "Ferrari",
        value: "Ferrari",
        short: "Ferrari",
      },
      {
        name: "Mercedes",
        value: "Mercedes",
        short: "Mercedes",
      },
      {
        name: "Williams",
        value: "Williams",
        short: "Williams",
      },
      {
        name: "Benetton",
        value: "Benetton",
        short: "Benetton",
      },
    ],
  });
  return handleAnswer(q3 === "Benetton");
}

async function question4() {
  const q4 = await select({
    message: "Which driver holds the record for most wins in Monaco GP?",
    choices: [
      {
        name: "Lewis Hamilton",
        value: "Lewis Hamilton",
        short: "Lewis Hamilton",
      },
      {
        name: "Max Verstappen",
        value: "Max Verstappen",
        short: "Max Verstappen",
      },
      {
        name: "Ayrton Senna",
        value: "Ayrton Senna",
        short: "Ayrton Senna",
      },
      {
        name: "Michael Schumacher",
        value: "Michael Schumacher",
        short: "Michael Schumacher",
      },
    ],
  });
  return handleAnswer(q4 === "Ayrton Senna");
}

async function question5() {
  const q5 = await select({
    message: "Which driver won the last Ferrari championship?",
    choices: [
      {
        name: "Kimi Räikkönen",
        value: "Kimi Räikkönen",
        short: "Kimi Räikkönen",
      },
      {
        name: "Fernando Alonso",
        value: "Fernando Alonso",
        short: "Fernando Alonso",
      },

      {
        name: "Sebastian Vettel",
        value: "Sebastian Vettel",
        short: "Sebastian Vettel",
      },
      {
        name: "Michael Schumacher",
        value: "Michael Schumacher",
        short: "Michael Schumacher",
      },
    ],
  });
  return handleAnswer(q5 === "Kimi Räikkönen");
}

console.clear();
try {
  await welcome();
  await rules();
  await askName();
  await question1();
  await question2();
  await question3();
  await question4();
  await question5();
  console.clear();
  position();
} catch (error) {
  process.on("uncaughtException", (error) => {
    if (error instanceof Error && error.name === "ExitPromptError") {
      console.log("👋 until next time!");
    } else {
      throw error;
    }
  });
}
