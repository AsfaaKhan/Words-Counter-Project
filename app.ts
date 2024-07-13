#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.yellowBright.bold("\n\t\t\t"+chalk.underline("Words Counter Project")+"\n"))
let userAnswer = await inquirer.prompt([{
    type :"input",
    name : "words",
    message: chalk.blue.underline("Write your sentence to count the words:")

}])


//Splits: the string by one or more whitespace characters (spaces, tabs, etc.).
//The regular expression `\s+` matches one or more whitespace characters.

let countWord = userAnswer.words.trim().split(/\s+/).length
console.log(chalk.magenta.underline(`\nThe total words in your sentence are : `) + chalk.yellow.bold(`${countWord} .`));