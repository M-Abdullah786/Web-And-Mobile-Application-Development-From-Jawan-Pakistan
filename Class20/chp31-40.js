//  Chapter 31 - 34 (Date &amp; Time)
//  q1
var dObj = new Date();
alert(dObj);

//  q2
var dStr = new Date().toString();
alert("String: " + dStr);

//  q3
var d = new Date();
var day = d.getDay();
alert(day);

// q4
var d = new Date();
var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
alert(dayNames[d.getDay()]);

// q5
var dateTimeParts = new Date().toLocaleString();
alert(dateTimeParts);

// q6
var later = new Date(2020, 11, 31);
alert(later);

// q7
var specificDate = new Date(1992, 1, 2);
alert(specificDate);

// q8
var elapsedMilliseconds = new Date(1980, 0, 1).getTime();
alert(elapsedMilliseconds);

// q9
var date = new Date();
date.setFullYear(2025);
alert(date);

//  q10
function changeMonthToJanuary(date) {
    date.setMonth(0);
    return date;
}
alert(changeMonthToJanuary(d));

// q11
function changeDayOfWeek(date, desiredDay) {
    let currentDay = date.getDay();
    let difference = desiredDay - currentDay;
    date.setDate(date.getDate() + difference);
    return date;
}

let myDate = new Date();
let newDate = changeDayOfWeek(myDate, 3);
alert(newDate);

// q12
function changeMinutes(date, minutes) {
    date.setMinutes(minutes);
    return date;
}
alert(changeMinutes(myDate, +prompt("Enter Minutes to change")));

// q13
function addHours(date, hours) {
    date.setHours(date.getHours() + hours);
    return date;
}
alert(addHours(myDate, prompt("Add hours to current date")));

// q14
function calculateAge(birthDate) {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    return age;
}
var birthYear = prompt("Enter Birth Year");
var birthDate = new Date(birthYear, 0, 1);
alert(calculateAge(birthDate));

// Chapter 35 - 37 (Functions)
// q1
function displayAlert() {
    alert("Alert displayed");
}

// q2
function askName() {
    var userName = prompt("Enter name:");
    alert(`Hello ${userName}`);
}

// q3
function callFunctions() {
    displayAlert();
    askName();
}
callFunctions();

// q4
function askAndDisplayName(name) {
    alert(name);
}
askAndDisplayName(askName());

// q6
function concatenate(a, b) {
    var result = a + b;
}

// q7
function multiply(a, b, c) {
    var result = a * b * c;
    return result;
}

// q8
function average(numbers) {
    var sum = numbers.reduce(function(acc, val) {
        return acc + val;
    }, 0);
    return sum / numbers.length;
}

// q9
function sum(a, b) {
    return a + b;
}

// q10
function someFunction() {
    return "This is a placeholder function!";
}
var result = someFunction();
alert(result);

// q11
function letterCount(word) {
    return word.length;
}

// q12
function setYear(date, year) {
    date.setFullYear(year);
}

// q13
function calculateAge(dob) {
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    return age;
}

// q14
function checkPresence(word, array) {
    return array.includes(word);
}
var array = [
    "zaid",
    "haris",
    "raza",
    "abubakar",
    "hassan",
    "hussain",
    "fatima",
];

// q15
function repeatLetter(letter) {
    return letter.repeat(10);
}

// q16
function reverseArray(arr) {
    return arr.reverse();
}

// Chapter 38 (Local vs. Global Variables)
// q1
function localVariableDemo() {
    var localVar = "I am local";
    console.log(localVar);
}

// q2
var globalVar = "I am global";

function accessGlobalVar() {
    console.log(globalVar);
}

// Chapter 39, 40 (Switch Statements)
// q1
var value = 2;
switch (value) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    default:
        console.log("Default");
}

// q2
var cityName = prompt("Enter city name:");
switch (cityName) {
    case "New York":
        alert("You entered New York!");
        break;
    case "London":
        alert("You entered London!");
        break;
    default:
        alert("City not found!");
}