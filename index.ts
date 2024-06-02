#! /usr/bin/env node
import { Console } from "console";
import inquirer from "inquirer";

const statsCecker = await inquirer.prompt([
  {
    name: "Stats",
    type: "list",
    choices: ["Average", "Strike Rate"],
    message: "What do you want to calculate",
  },
]);

if (statsCecker.Stats === "Strike Rate") {
  const strikeRate = await inquirer.prompt([
    {
      name: "RUNS",
      type: "number",
      message: "Runs Scored",
    },
    {
      name: "BALLS",
      type: "number",
      message: "Balls Faced",
    },
  ]);
  let strikeRateF: number = (strikeRate.RUNS / strikeRate.BALLS) * 100;
  console.log(`Your strike rate is ${strikeRateF.toFixed(1)}`);
} else if (statsCecker.Stats === "Average") {
  const average = await inquirer.prompt([
    {
      name: "RUNS",
      type: "number",
      message: "Runs Scored",
    },
    {
      name: "OUTS",
      type: "number",
      message: "Times Out",
    },
  ]);
  let averageF: number = average.RUNS / average.OUTS;
  console.log(`Your average is ${averageF.toFixed(1)}`);
}
























