//document.getElementById("count-el").innerText = 5;
// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// console.log(count);
// let myAge = 29;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// let count = 5;
// //count +1
// count = count + 1;
// count = count - 2;
// console.log(count);

// let bonusPoint = 50;
// bonusPoint = bonusPoint + 50;
// console.log(bonusPoint);
// bonusPoint = bonusPoint - 75;
// console.log(bonusPoint);
// bonusPoint = bonusPoint + 50;
// console.log(bonusPoint);
// function increment() {
//   console.log("The button was clicked");
// }
// function decideName() {
//   console.log(42);
// }
// decideName();
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// function sumOfLapTimes() {
//   console.log(lap1 + lap2 + lap3);
// }
// sumOfLapTimes();

// let lapTimes = lap1 + lap2 + lap3;
// function totalLapTimes() {
//   console.log(lapTimes);
// }
// totalLapTimes();
// let lapsCompleted = 0;
// function increment() {
//   lapsCompleted = lapsCompleted + 1;
// }
// increment();
// increment();
// increment();
// console.log(lapsCompleted);
// let countEl = document.getElementById("count-el");
// console.log(countEl);
// let count = 0;
// function increment() {
//   count = count + 1;
//   countEl.innerText = count;
//   console.log(count);
// }
// increment();

// let countEl = document.getElementById("count-el");
// let count = 0;

// function increment() {
//   count = count + 1;
//   countEl.innerText = count;
// }

// // let saveButton = document.getElementById("save-btn");
// // console.log(saveButton);

// function save() {
//   console.log(count);
// }

// let userName = "Bivek";
// console.log(userName);
// let usernsame = "Bivek";
// let message = "You have a three message";
// let messageToUser = message + "," + usernsame + "!";
// console.log(message + " " + usernsame);
// let name = 42;
// let greeting = " is my name";
// let myGreeting = name + greeting;
// console.log(myGreeting);

// let point = 4;
// let bonusPoint = "20";
// let totalPoints = point + bonusPoint;
// console.log(totalPoints);
// let welcomeEl = document.getElementById("welcome-el");
// let name = " Bivek";
// let greeting = "welcome back";

// welcomeEl.innerText = greeting + name;
// //add emoji in the end
// welcomeEl.innerHTML = greeting + name + "💫";

//write  your code below here

// Hint: count=Count+1\
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
}
