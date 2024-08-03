#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: chalk.blue("Enter Your sentence for counting the words!"),
        type: "input",
        name: "sentence"
    }
]);
let countWords = answer.sentence.trim().split(" ");
console.log(countWords); // logging Words in the form off array in console
console.log(chalk.yellow(`Your Total words are ${chalk.bold.red(countWords.length)}`)); // showing user the total number of words: 
