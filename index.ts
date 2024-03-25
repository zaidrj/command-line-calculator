#! /usr/bin/env node

import inquirer from "inquirer";
// I have created a calculator which can operate with 3 numbers
const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "FirstNumber" },
  { message: "Enter Second Number", type: "number", name: "SecondNumber" },
  { message: "Enter Third Number", type: "number", name: "ThirdNumber" },
  {
    message: "select one of the following operations",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Division", "Multiplication"],
  }, 
]);

//condition
if (answer.operator === "Addition") {
  console.log(answer.FirstNumber + answer.SecondNumber + answer.ThirdNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.FirstNumber - answer.SecondNumber - answer.ThirdNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.FirstNumber * answer.SecondNumber * answer.ThirdNumber);
} else if (answer.operator === "Division") {
  console.log(answer.FirstNumber / answer.SecondNumber / answer.ThirdNumber);
} else {
  console.log("Please Select Valid Operator");
}
