// q1
var city = prompt("Enter your city please")
if (city == "Karachi") {
    document.write("<br>Welcome to the city of lights")
} else {
    document.write("<br>No problem, get lost....")
}
//q2
var gender = prompt("Enter your gender")
if (gender == "male") {
    document.write("<br>Good Morning Sir")
} else {
    document.write("<br>Good Morning Ma'am")
}
//q3
var light_color = prompt("Enter signal light color")
if (light_color == "Red") {
    document.write("<br>Must stop")
}
if (light_color == "Yellow") {
    document.write("<br>Ready to move")
}
if (light_color == "Green") {
    document.write("<br>Move now")
} else {
    document.write("<br>Invalid input")
}
//q4
var fuel_qnt = prompt("Enter your current fuel count")
if (fuel_qnt <= "0.25") {
    document.write("<br>Please refill the fuel in your car")
} else {
    document.write("<br>Your fuel is more than 0.25%")
}
// q5
// a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
// b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
// c
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
// e
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
// f
if ("car" < "cat") {
    alert("car is smaller than cat");
}
//q6
document.write("<br><h1>MarkSheet</h1>");

var total_marks = prompt("Enter your total marks:");
var marks_obt = prompt("Enter the marks you obtained:");
var percentage = (marks_obt / total_marks) * 100;

if (percentage >= 80) {
    document.write(`<br> Total Marks: ${total_marks} <br> Marks obtained: ${marks_obt} <br> Grade: A-one <br> Remarks: Excellent`);
} else if (percentage >= 70) {
    document.write(`<br> Total Marks: ${total_marks} <br> Marks obtained: ${marks_obt} <br> Grade: A <br> Remarks: Good`);
} else if (percentage >= 60) {
    document.write(`<br> Total Marks: ${total_marks} <br> Marks obtained: ${marks_obt} <br> Grade: B <br> Remarks: You need improvement`);
} else if (percentage < 60) {
    document.write(`<br> Total Marks: ${total_marks} <br> Marks obtained: ${marks_obt} <br> Grade: Fail <br> Remarks: Sorry`);
} else {
    document.write("Invalid Input");
}
//q7
var sect_num = prompt("Enter any number")
if (sect_num == 5) {
    document.write("Bingo! Correct answer ")
} else {
    document.write("Not this but closed enough to the real answer.")
}
// q8
var number = prompt("Enter a number:");
if (number % 3 === 0) {
    document.write(`The number ${number} is divisible by 3.`);
} else {
    document.write(`The number ${number} is not divisible by 3.`);
}
//q9
var number = prompt("Enter a number:");
if (number % 2 === 0) {
    document.write(`The number ${number} is an even number.`);
} else {
    document.write(`The number ${number} is an odd number.`);
}
// q10
var temperature = parseInt(prompt("Enter the temperature:"));

if (temperature > 40) {
    document.write("It is too hot outside.");
} else if (temperature > 30) {
    document.write("The weather today is normal.");
} else if (temperature > 20) {
    document.write("Today’s weather is cool.");
} else if (temperature > 10) {
    document.write("OMG! Today’s weather is so cool.");
} else {
    document.write("It's quite cold outside.");
}
//q11
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

if (operation === "+") {
    document.write(`${num1} + ${num2} = ${num1 + num2}`);
} else if (operation === "-") {
    document.write(`${num1} - ${num2} = ${num1 - num2}`);
} else if (operation === "*") {
    document.write(`${num1} * ${num2} = ${num1 * num2}`);
} else if (operation === "/") {
    if (num2 !== 0) {
        document.write(`${num1} / ${num2} = ${num1 / num2}`);
    } else {
        document.write("Division by zero is not allowed.");
    }
} else if (operation === "%") {
    if (num2 !== 0) {
        document.write(`${num1} % ${num2} = ${num1 % num2}`);
    } else {
        document.write("Modulus by zero is not allowed.");
    }
} else {
    document.write("Invalid operation.");
}