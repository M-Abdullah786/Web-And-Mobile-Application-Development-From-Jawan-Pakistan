//   q1 - q6
var studentNames = [];
var studentNamesObj = new Array();
var stringArray = ["John", "Jane", "Doe"];
var numbersArray = [10, 20, 30, 40];
var booleanArray = [true, false, true, false];
var mixedArray = ["Alice", 25, true, null, { grade: "A" }];

// q7
let qualifications = [
    "SSC",
    "HSC",
    "BCS",
    "BS",
    "BCOM",
    "MS",
    "M. Phil.",
    "PhD",
];
for (let i = 0; i < qualifications.length; i++) {
    document.write(`${i + 1}) ${qualifications[i]}<br>`);
}

// q8
let studentNames = ["Micheal", "John", "Tony"];
let studentScores = [320, 230, 480];
let totalMarks = 500;
for (let i = 0; i < studentNames.length; i++) {
    let percentage = (studentScores[i] / totalMarks) * 100;
    document.write(
        `Score of ${studentNames[i]} is ${studentScores[i]}. Percentage: ${percentage}%<br>`
    );
}

// q9
let colors = ["Red", "Green", "Blue"];
document.write(`<b>Initial array:</b> ${colors}`);

// a.
let colorAtBeginning = prompt(
    "What color do you want to add to the beginning?"
);
colors.unshift(colorAtBeginning);
document.write(`<br><b>Array after addition at beginning:</b> ${colors}`);

// b.
let colorAtEnd = prompt("What color do you want to add to the end?");
colors.push(colorAtEnd);
document.write(`<br><b>Array after addition at end:</b> ${colors}`);

// c.
colors.unshift("Pink", "Purple");
document.write(`<br><b>Array after adding 2 more at beginning:</b> ${colors}`);

// d.
colors.shift();
document.write(`<br><b>Array after deleting the first color:</b> ${colors}`);

// e.
colors.pop();
document.write(`<br><b>Array after deleting the last color:</b> ${colors}`);

// f.
let indexToAdd = +prompt("At which index do you want to add a color?");
let colorToAdd = prompt("Which color do you want to add?");
colors.splice(indexToAdd, 0, colorToAdd);
document.write(
    `<br><b>Array after adding color at index ${indexToAdd}:</b> ${colors}`
);

// g.
let indexToDelete = +prompt(
    "At which index do you want to start deleting colors?"
);
let numOfColorsToDelete = +prompt("How many colors do you want to delete?");
colors.splice(indexToDelete, numOfColorsToDelete);
document.write(
    `<br><b>Array after deleting ${numOfColorsToDelete} color(s) from index ${indexToDelete}:</b> ${colors}`
);

// q10
var score = [320, 230, 480, 120];
document.write(`<b>Scores of Students:</b> ${score}`);
score.sort(function(a, b) {
    return a - b;
});
document.write(`<br><b>Ordered Scores of Students:</b> ${score}`);

// q11
var citiesList = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write(`<b>Cities list:</b> <br> ${citiesList}`);
var copy = citiesList.slice(2, 5);
document.write(`<br><br><b>Selected cities list:</b><br> ${copy}`);

// q12
var arr = ["This", "is", "my", "cat"];
document.write(`<b>Array:</b><br> ${arr}<br><br>`);
let text = arr.join(" ");
document.write(`<b>String:</b><br> ${text}`);

// q13
let fifoArray = [];

fifoArray.push("keyboard");
fifoArray.push("mouse");
fifoArray.push("printer");
fifoArray.push("monitor");

document.write(`<b>Devices:</b><br> ${fifoArray}<br>`);

let firstOut = fifoArray.shift();
document.write(`<br><b>Out:</b><br> ${firstOut}<br>`);

let secondOut = fifoArray.shift();
document.write(`<br><b>Out:</b><br> ${secondOut}<br>`);

let thirdOut = fifoArray.shift();
document.write(`<br><b>Out:</b><br> ${thirdOut}<br>`);

let fourthOut = fifoArray.shift();
document.write(`<br><b>Out:</b><br> ${fourthOut}<br>`);

// q14
let lifoArray = [];

lifoArray.push("keyboard");
lifoArray.push("mouse");
lifoArray.push("printer");
lifoArray.push("monitor");

document.write(`<b>Devices:</b><br> ${lifoArray}<br>`);

let firstOut = lifoArray.pop();
document.write(`<br><b>Out:</b><br> ${firstOut}<br>`);

let secondOut = lifoArray.pop();
document.write(`<br><b>Out:</b><br> ${secondOut}<br>`);

let thirdOut = lifoArray.pop();
document.write(`<br><b>Out:</b><br> ${thirdOut}<br>`);

let fourthOut = lifoArray.pop();
document.write(`<br><b>Out:</b><br> ${fourthOut}<br>`);

// q15
const manufacturers = [
    "Apple",
    "Samsung",
    "Motorola",
    "Nokia",
    "Sony",
    "Haier",
];

document.write('<select name="manufacturers" id="manufacturers">');
document.write('<option value="">Select a manufacturer</option>');

for (let i = 0; i < manufacturers.length; i++) {
    document.write(
        `<option value="${manufacturers[i]}">${manufacturers[i]}</option>`
    );
}

document.write("</select>");