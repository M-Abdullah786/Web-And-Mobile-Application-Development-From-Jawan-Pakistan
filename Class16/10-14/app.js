// chapter 10
//q1
var city = prompt("Enter your city please")
if (city == "Karachi") {
    document.write("<br>Welcome to the city of lights")
} else {
    document.write("<br>No problem, get lost....")
}
// q2
if (x === y) {
    var newVariable = prompt("Please enter the value of z:");
    document.write("The value of z is: " + newVariable);
}
// q3
var zip_code = prompt("Enter your City Zip code: ")
if (zip_code === 10010) {
    alert("Karachi")
} else {
    document.write("Please write correct city.")
}
//q4
var x = 5
if (x === 5) {
    x = 1
    document.write(`X was ${x}, now it is: ${x}`)
} else { `Invalid number.` }

// chapter 11
// q1
if (x !== y) {
    document.write("Not equal")
} else {
    document.write("Equal")
}
// q2
if (x >= y) {
    document.write("Yes, it is greater.")
} else {
    document.write("Not it is not greater.")
}
// q3
var x = 5

if (x !== 10) {
    x = 10
    document.write("True")
} else {
    document.write("Not true")
}
//q4
var number = 7

if (number !== 5) {
    alert("Congratulations! The number is not 5.");
} else {
    alert("The number is 5.")
}
// q5
var firstName = prompt("Enter your first name:");

if (firstName !== "John") {
    alert("No match");
} else {
    alert("Its John")
}

// Chapter 12
// q1
var var1 = 1
var var2 = 2
if (var1 >= var2) {
    alert("Var 1 big")
} else {
    alert("Var 2 big")
}

// q2
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");
var totalMarksPerSubject = 100;
var obtainedMarks1 = +prompt(`Enter the obtained marks for ${subject1}: `);
var obtainedMarks2 = +prompt(`Enter the obtained marks for ${subject2}: `);
var obtainedMarks3 = +prompt(`Enter the obtained marks for ${subject3}: `);
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalMarks = totalMarksPerSubject * 3;
var percentage = (totalObtainedMarks / totalMarks) * 100;

if (percentage >= 80) {
    var grade = "A-one"
    var remarks = "Excellent"
} else if (percentage >= 70) {
    var grade = "A"
    var remarks = "Good"
} else if (percentage >= 60) {
    var grade = "B"
    var remarks = "You need to improve"
} else if (percentage < 60) {
    var grade = "Fail"
    var remarks = "Serious improvement needed"
}

var result = "<h1>Marks Sheet</h1>";
result += `<br><br>Total Marks: ${totalMarks}`
result += `<br>Marks obtained: ${totalObtainedMarks}`
result += `<br>Percentage: ${percentage}`
result += `<br>Grade: ${grade}`
result += `<br>Remarks: ${remarks}`
document.write(result);

// q3
var a = 10
if (a === 10) {
    alert("a is 10")
} else {
    alert(`The correct value of a is 10`)
}

// q4
var city = prompt("Enter a city name: ")
if (city == "karachi") {
    alert("Yes Karachi")
} else if (city == "lahore") {
    alert("Yes Lahore")
} else {
    alert("Not karachi or lahore")
}

// Chapter 13 
// q1
if (a == b && c == d)

// q2
    if (a == b || c == d)

    // q3
        if (name == "Hamza" || name == "Arsalan" && age < 60)

        // q4
            var var1 = 1
var var2 = 2
if (var1 < var2 || var1 > var2) {
    alert("Both condition true")
}

// q5
var var1 = "Muhammad"
var var2 = "Abdullah"
var firstName = prompt("Enter first name: ")
var lastName = prompt("Enter last name: ")
if (var1 == firstName && var2 == lastName) {
    alert(`good match ${firstName + lastName}`)
} else {
    alert(`no match ${firstName + lastName}`)
}

// Chapter 14 
// q1
var password = prompt("Enter your password:");
if (password !== "") {
    if (password.length <= 5) {
        alert("Password must be greater than 5 characters.");
    } else {
        alert("OK");
    }
} else {
    alert("Password cannot be empty.");
}

// q2
var a = 1;
var c = "Max";
if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}

// q3
if (a === 1 && c === "Max") {
    alert("OK");
}

// q4
var num1 = 10;
var num2 = 10;
if (num1 === num2) {
    if (num1 <= num2) {
        alert("Both conditions passed!");
    }
}