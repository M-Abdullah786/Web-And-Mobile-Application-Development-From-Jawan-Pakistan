// q1
var firstName = prompt("Enter your first name:")
var lastName = prompt("Enter your last name:")
var fullName = firstName + " " + lastName
alert(`Welcome ${fullName}!`);

// q2
var phoneName = prompt("Enter your favorite mobile phone model: ")
var phoneName_length = phoneName.length
document.write(`My favorite phone is: ${phoneName}`);
document.write(`<br>Length of string: ${phoneName_length}`);

// q3
var word = "Pakistani";
var index = word.indexOf("n");
document.write(`String: ${word}`)
document.write(`<br>Index of 'n': ${index}`);

// q4
var word = "Hello World";
var index = word.lastIndexOf("l");
document.write(`String: ${word}`)
document.write(`<br>Last index of 'l': ${index}`);

// q5
var word = "Pakistani";
var index = 3;
var charAtIndex = word[index];
document.write(`String: ${word}`);
document.write(`<br>Character at index 3: ${charAtIndex}`);

// q6
alert(`Welcome ${firstName + " " + lastName}`);

// q7
let text = "Hyderabad";
let newText = text.replace("Hyder", "Islam");
document.write(`City: ${text}`)
document.write(`<br>After replacement: ${newText}`)

// q8
var text = "Ali and Sami are best friends. They play cricket and football together.";
var newText = text.replace("and", "&");
document.write(newText);

// q9
var str = "472"
var convertedStr = Number(str)
document.write(`Value: ${str}`)
document.write(`<br>Type: ${typeof str}`)
document.write(`<br>Value: ${convertedStr}`);
document.write(`<br>Type: ${typeof convertedStr}`);

// q10
var input = prompt("Enter word to capitalize: ")
document.write(`User input: ${input}`);
document.write(`<br>Upper case: ${input.toUpperCase()}`);

// q11
var input = prompt("Enter letter to title case:")
var firstChar = input.slice(0, 1);
var remaining = input.slice(1)
document.write(`User input: ${input}`)
document.write(`<br>Title case: ${firstChar.toUpperCase() + remaining}`)

// q12
var num = 35.36;
var numString = num.toString();
var result = numString.replace('.', '');
document.write(`Number: ${num}<br>`);
document.write(`Result: ${result}`);

// q13
var username = prompt("Enter your username:");

if (username.includes('@') || username.includes('.') || username.includes('!') || username.includes(',')) {
    username = prompt("Please enter a valid username (no special characters like @, ., !, ,):");
}

document.write(`Your username is: ${username}`);

// q14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();

if (A.includes(userInput)) {
    var index = A.indexOf(userInput);
    document.write(`${userInput} is <b>available</b> at index ${index} in our bakery.`);
} else {
    document.write(`We are sorry. ${userInput} is <b>not available</b> in our bakery.`);
}

// q15
var password = prompt("Enter your password:");

while (true) {
    if (password.length < 6) {
        password = prompt("Invalid password. It must be at least 6 characters long. Please enter a valid password:");
    } else if (!isNaN(password[0])) {
        password = prompt("Invalid password. It should not start with a number. Please enter a valid password:");
    } else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
        password = prompt("Invalid password. It must contain both letters and numbers. Please enter a valid password:");
    } else {
        break;
    }
}

document.write(`Your valid password is: ${password}`);

// q16
var university = "University of Karachi";
var universityArray = university.split("");

document.write("The elements of the array are:<br>");
for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>");
}

// q17
var text = "Pakistani";
var letter = text.charAt(text.length - 1);
document.write(`User input: ${text}`)
document.write(`<br>Last char of input: ${letter}`);

// q18
var text = "The quick brown fox jumps over the lazy dog";
var wordsArray = text.toLowerCase().split(" ");
var count = 0;

for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === "the") {
        count++;
    }
}

document.write(`Text: ${text}`)
document.write(`<br>There are ${count} occurrence(s) of word 'the'`);