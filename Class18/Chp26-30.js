// q1
var num = +prompt("Enter a positive number: ")
document.write(`number: ${num}`)
document.write(`<br>round off value: ${Math.round(num)}`)
document.write(`<br>floor value: ${Math.floor(num)}`);
document.write(`<br>ceil value: ${Math.ceil(num)}`);

// q2
var num = +prompt("Enter a negative number: ")
document.write(`number: ${num}`)
document.write(`<br>round off value: ${Math.round(num)}`)
document.write(`<br>floor value: ${Math.floor(num)}`);
document.write(`<br>ceil value: ${Math.ceil(num)}`);

// q3
var num = +prompt("Enter a number:");
document.write(`The absolute value of ${num} is ${Math.abs(num)}.`);

// q4
for (let i = 0; i < 10; i++) {
    document.write(`random dice value: ${Math.floor(Math.random() * 6) + 1}<br>`)
}

// q5
for (let i = 0; i < 10; i++) {
    var coin = Math.floor(Math.random() * 2) + 1;

    if (coin === 1) {
        document.write(`random coin value: Heads<br>`);
    } else {
        document.write(`random coin value: Tails<br>`);
    }
}

// q6
for (let i = 0; i < 100; i++) {
    document.write(`random number between 1 and 100 is: ${Math.floor(Math.random() * 100) + 1}<br>`)
}

// q7
var userInput = prompt("Enter your weight:");
var weight = parseFloat(userInput);

document.write(`The weight of the user is: ${weight} kilograms.`);

// q8
var secretNum = 9;
var userGuess = parseInt(prompt("Guess the number between 1 - 10: "))

if (userGuess === secretNum) {
    document.write("yay")
} else {
    document.write("nope")
}