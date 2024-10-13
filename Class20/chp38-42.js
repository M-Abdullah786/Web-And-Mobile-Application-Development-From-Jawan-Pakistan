// q1
function power(a, b) {
    return Math.pow(a, b);
}

// console.log(power(2, 3)); 

// q2
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// console.log(isLeapYear(2020));
// console.log(isLeapYear(2021)); 

// q3
function calculateArea(a, b, c) {
    var s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// console.log(calculateArea(3, 4, 5));

// q4
function mainFunction(marks) {
    const avg = calculateAverage(marks);
    const percent = calculatePercentage(marks);
    console.log("Average: " + avg);
    console.log("Percentage: " + percent + "%");
}

function calculateAverage(marks) {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
}

function calculatePercentage(marks) {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return (total / (marks.length * 100)) * 100;
}

// mainFunction([85, 90, 78]);

// q5
function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

// console.log(customIndexOf("Hello World", "W")); 
// console.log(customIndexOf("Hello World", "x")); 

// q6
function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}
// console.log(removeVowels("Pleases read this application and give me gratuity"));

// q7
function countVowelPairs(sentence) {
    var count = 0;
    const vowels = "aeiouAEIOU";

    for (var i = 0; i < sentence.length - 1; i++) {
        if (vowels.includes(sentence[i]) && vowels.includes(sentence[i + 1])) {
            count++;
        }
    }
    return count;
}
// console.log(countVowelPairs("Pleases read this application and give me gratuity."));

// q8
function convertDistance(km) {
    const meters = km * 1000;
    const feet = km * 3280.84;
    const inches = km * 39370.1;
    const centimeters = km * 100000;

    console.log("Distance in meters: " + meters + " m");
    console.log("Distance in feet: " + feet + " ft");
    console.log("Distance in inches: " + inches + " in");
    console.log("Distance in centimeters: " + centimeters + " cm");
}

// const distanceInKm = parseFloat(prompt("Enter the distance in kilometers:"));
// convertDistance(distanceInKm);

// q9
function calculateOvertimePay(hoursWorked) {
    const overtimeRate = 12;
    const regularHours = 40;

    if (hoursWorked > regularHours) {
        const overtimeHours = hoursWorked - regularHours;
        const overtimePay = overtimeHours * overtimeRate;
        return overtimePay;
    }
    return 0;
}

// const hours = parseInt(prompt("Enter the number of hours worked:"));
// const overtimePay = calculateOvertimePay(hours);
// console.log("Overtime Pay: Rs. " + overtimePay);


// q10
function calculateCurrencyNotes(amount) {
    const notes100 = Math.floor(amount / 100);
    amount %= 100;
    const notes50 = Math.floor(amount / 50);
    amount %= 50;
    const notes10 = Math.floor(amount / 10);

    console.log("Number of 100 Rs. notes: " + notes100);
    console.log("Number of 50 Rs. notes: " + notes50);
    console.log("Number of 10 Rs. notes: " + notes10);
}
// const withdrawalAmount = parseInt(prompt("Enter the amount to withdraw (in hundreds):")) * 100;
// calculateCurrencyNotes(withdrawalAmount);