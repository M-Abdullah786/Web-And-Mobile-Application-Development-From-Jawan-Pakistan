// q1
var arr = [];

// q2
var arr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
];
document.write(arr);

// q3
for (let i = 1; i < 11; i++) {
    document.write(i);
}

// q4
var table = +prompt("Enter a number to show its multiplication table: ");
let length = +prompt("Enter the length of the multiplication table: ");
document.write(`Multiplication Table of ${table} up to ${length}:`);
for (let i = 1; i <= length; i++) {
    document.write(`${table} x ${i} = ${table * i}`);
}

// q5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i]);
}
for (let i = 0; i < fruits.length; i++) {
    document.write(`Element at index ${i} is ${fruits[i]}`);
}

// q6
var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
document.write(`<b>Counting:</b><br> ${counting.join(", ")}<br>`);

var reverseCounting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write(`<br><b>Reverse counting:</b><br> ${reverseCounting.reverse().join(", ")}<br>`);

var even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
document.write(`<br><b>Even:</b><br> ${even.join(", ")}<br>`);

var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
document.write(`<br><b>Odd:</b><br> ${odd.join(", ")}<br>`);

var series = ['2k', '4k', '6k', '8k', '10k', '12k', '14k', '16k', '18k', '20k'];
document.write(`<br><b>Series:</b><br> ${series.join(", ")}<br>`);

// q7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();

if (A.includes(userInput)) {
    var index = A.indexOf(userInput);
    document.write(`${userInput} is <b>available</b> at index ${index} in our bakery.`);
} else {
    document.write(`We are sorry. ${userInput} is <b>not available</b> in our bakery.`);
}

// q8
var A = [24, 53, 78, 91, 12]
var largest = A[0]
for (var i = 0; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i]
    }
}
document.write(`Array items: ${A.join(", ")}`);
document.write(`<br>The largest number is ${largest}`);

// q9
var A = [24, 53, 78, 91, 12]
var smallest = A[0]
for (var i = 0; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i]
    }
}
document.write(`Array items: ${A.join(", ")}`);
document.write(`<br>The smallest number is ${smallest}`);

// q10
for (var i = 1; i < 21; i++) {
    document.write(`${i * 5}, `);
}