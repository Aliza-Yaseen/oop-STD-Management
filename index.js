#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter Student Name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please Enter a non-empty value";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select The Course To Enroll!",
        choices: ["MS Office", "HTML", "JavaScript", "typeScript", "Python"]
    }
]);
const tutionFee = {
    "MS Office": 2500,
    "HTML": 3000,
    "JavaScript": 10000,
    "typeScript": 15000,
    "Python": 12000,
};
console.log(`\n Tuition Fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance} \n`);
let paymentType = await inquirer.prompt([
    {
        name: "Payment",
        type: "list",
        message: "Please Select Payment Method",
        choices: [" Bank Transfer", "Easypaisa", "Jazzcash"]
    },
    {
        name: "Amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please Enter a Non-empty Value!";
        },
    }
]);
console.log(`\n You Select Payment Method By ${paymentType.Payment}`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.Amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratulations! you've successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("\n*****Status*****\n");
        console.log(`Student Name: ${answer.student}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExiting Student Management System");
    }
}
else {
    console.log("Invalid Amount due to course");
}
