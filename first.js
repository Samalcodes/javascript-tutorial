// console.log("hello worlds");
//  fullname="shiva";
//  console.log(fullname);
//  const student = {
//     fullname:"smruti ranjan samal",
//     age:23,
//     cgpa:8.4,
//     ispass: true,
// };
//  console.log(student);

//  const item = {
//     name:"parker",
//     ratting:7200,
//     offer:5,
//     price:270,
//  };
//  console.log(item);
// let age = prompt("Enter the age 34");

// if (age < 18) {
//   console.log("Junior");
// } else if (age > 60) {
//   console.log("Senior");
// } else {
//   console.log("Middle");
// }

// let price = [250,645,300,900,50];
// let updatedprice = [];
// for(let val of price){
//   updatedprice.push(val-val*0.1);
// }
// console.log(updatedprice);

// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.splice(0,1);
// console.log(companies);
// companies.splice(2,1,"OLA")
// console.log(companies);
// companies.splice(5,0,"Amazon");
// console.log(companies);

// function countvowels(){
//   let str = prompt("Enter the string");
//   let count = 0;
//   for(let i=0;i<str.length;i++){
//     if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
//       count++;
//     }
//   }
//   console.log("count "+count);
// }
// countvowels();
// first pull request

// let string = "hello world";
// let string1 = string +1;
// console.log(string1);
// console.log(typeof string1);
// const item = {
//   name:"led Bulb",
//   price:"150"
// }
// console.log(item);
// const readline = require('node:readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question(`What's your name?`, name => {
//   console.log(`Hi ${name}!`);
//   rl.close();
// });

// let age=50;

// if(age>10 && age<20){
//   console.log("Teen");
// }
// else{
//   console.log("age do not lye under 20");
// }
// age>10 && age<20 ? console.log("Teen") : console.log("age do not lye under 20");

// switch(age){
//   case 10:
//     console.log("10");
//     break;
//   case 20:
//     console.log("20");
//     break;
//   case 30:
//     console.log("30");
//     break;
//   case 40:
//     console.log("40");
//     break;
//   case 50:
//     console.log("50");
//     break;
//   default:
//     console.log("default");
//     break;
// }
// if(age%2==0 && age%3==0)
// {
//   console.log("age is divisible by 2 and 3");
// }
// else{
//   console.log("age is not divisible by 2 and 3")
// }

// if(age%2==0 || age%3==0)
//   {
//     console.log("age is divisible ");
//   }
//   else{
//     console.log("age is not divisible by 2 and 3")
//   }

//  let drive= age>18?"you can drive":"you cannot drive";
//  console.log(drive);

// LOOPS AND FUNCTION

// FOR LOOP
//  for(let i = 1;i <= 5; i++){
//   console.log("smruti ranjan samal")
//  }
//  let i=2;

// WHILE LOOP
//  while(i<=5)
//  {
//   console.log("Smruti");
//   i++;
//  }

// let str="smruti ranjan samal";
// for(let i of str){
//   console.log(i);
// }

// let student = {
//   name:"rahul kumar",
//   age:20,
//   cgpa:7.5,
//   ispass:true,
// };

// for(let key in student){
//   console.log("key",key,"value=",student[key]);
// }

// Print all even numbers from 0 to 100

// for(let i=0;i<=100;i++)
// {
//   if(i%2==0)
//   {
//     console.log(i);
//   }
// }

// Create a game where you start with any number .Ask the user to keep guessing the game number untill the user enters correct value

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let random = Math.floor(Math.random() * 100) + 1;

// function askQuestion() {
//   rl.question("Guess the number: ", (input) => {
//     let guess = parseInt(input);

//     if (guess === random) {
//       console.log("Congratulations! You guessed the correct number.");
//       rl.close();
//     } else {
//       console.log("Wrong guess, try again.");
//       askQuestion(); // Recursively call function to ask again
//     }
//   });
// }

// askQuestion();

// Guess number

// let gameNum = 25;
// let userNum = prompt("Guess the number :");

// while (userNum != gameNum) {
//   userNum = prompt("You enter the wrong number , Guess again :");
// }

// console.log("Congratulations you entered the right number");

// let str = "smruti ranjan samal";
// console.log(str);
// str = str.toUpperCase();
// console.log(str)
// let str1 = str.slice(1,5);
// console.log(str1);
// let str2=str.concat(str1);
// console.log(str2);
// let str3 = str.replace("S","A");
// console.log(str3);
// let str4 = str.replaceAll("S","A");
// console.log(str4);

// Promt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.

// let name = prompt("enter the username");
// let new_name = '@'+name+name.length;
// console.log(new_name);

// Functions and methods
// function Print(msg){
//   console.log("Smruti Ranjan Samal");
//   console.log("shiva");
//   console.log(msg);
//   console.log(typeof(msg));
// }
// Print("3");

// function Print(msg){
//   console.log("Smruti Ranjan Samal");
//   console.log("shiva");
//   console.log(msg);
//   console.log(typeof(msg));
//   return msg
// }
// Print("3");
// let value = Print();

// Arrow Functions

// let print=()=>{
//   console.log("Smruti")
// }
// print();
// console.log(print)

// create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the String
// let count=0;
// function vowel(str) {
//   for (let n of str.toLowerCase()) {
//     if (n === "a" || n === "e" || n === "i" || n === "o" || n === "u") count++;
//   }
//   console.log(count);
// }
// vowel('smruti ranjan samal');

