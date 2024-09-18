// q1
var input = prompt("Enter a character (number or letter):");

// Check if the input is a single character
if (input.length === 1) {
    var asciiCode = input.charCodeAt(0); // Get the ASCII code of the input

    if (asciiCode >= 48 && asciiCode <= 57) {
        // ASCII code for numbers (0-9) is between 48 and 57
        alert("The input is a number.");
    } else if (asciiCode >= 65 && asciiCode <= 90) {
        // ASCII code for uppercase letters (A-Z) is between 65 and 90
        alert("The input is an uppercase letter.");
    } else if (asciiCode >= 97 && asciiCode <= 122) {
        // ASCII code for lowercase letters (a-z) is between 97 and 122
        alert("The input is a lowercase letter.");
    } else {
        alert("The input is neither a number nor a letter.");
    }
} else {
    alert("Please enter only one character.");
}

// q2
var input1 = prompt("Enter the first number: ")
var input2 = prompt("Enter the second number: ")
if (input1 > input2) {
    alert(`Input 1 ${input1} is larger`)
} else if (input1 == input2) {
    alert(`The inputs ${input1} & ${input2} are equal`)
} else {
    alert(`Input 2 ${input2} is larger`)
}

// q3
var number = prompt("Enter a number:")
if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else if (number === 0) {
    alert("The number is zero.");
}

// q4
var input = prompt("Enter a letter or word to check if it's a vowel or not: ").toLowerCase();
if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u") {
    alert("It's a vowel");
} else {
    alert("It's not a vowel");
}

// q5
var correctPassword = "password123";
var userPassword = prompt("Please enter your password:");
if (userPassword === "") {
    alert("Please enter your password.");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
}

// q6
var greeting
var hour = 13
if (hour < 18) {
    greeting = "Good day"
} else {
    greeting = "Good evening"
}
alert(greeting)

// q7
var time = prompt("Enter time in 24-hour clock format (e.g., 1900 for 7 PM):");
if (time >= 0 && time < 1200) {
    alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night!");
} else {
    alert("Invalid time entered. Please enter time between 0000 and 2359.");
}