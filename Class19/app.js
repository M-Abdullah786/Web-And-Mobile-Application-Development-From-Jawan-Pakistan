//q1
var rightNow = new Date();
alert(rightNow);

//q2
var months_names = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];
var now = new Date();
var month = now.getMonth();
var nameOfmonth = months_names[month];
alert(`Current Month: ${nameOfmonth}`);

//q3
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
alert(`Today is ${nameOfToday}`);

//q4
var now = new Date();
var theDay = now.getDay();
if (theDay == 6 || theDay == 0) {
    alert("Its Fun day...");
} else {
    alert("Weekday it is...");
}

//q5
var theDay = now.getDate();
if (theDay > 15) {
    alert("Last days of the month");
} else {
    alert("First fifteen days of the month");
}

//q6
var date = now.getDate();
var theDay = now.getTime();
alert(
    `Current Date:\n${now}\nMillisecond since Jan 1st 1970: ${theDay}\nSeconds since Jan 1st 1970: ${
    theDay / 1000
  }`
);

//q7
var hrs = now.getHours();
if (hrs >= 0 && hrs <= 12) {
    alert("Its AM");
} else {
    alert("Its PM");
}

//q8
var laterDate = new Date(2020, 11, 31);
alert(laterDate);

//q9
var currentDate = new Date();
var millisecondsDifference = currentDate - new Date(2015, 5, 18);
var daysPassed = millisecondsDifference / (1000 * 60 * 60 * 24);
var roundedDaysPassed = Math.floor(daysPassed);
alert(`Number of days passed since 1st Ramadan 2015: ${roundedDaysPassed}`);

//q10
var currentDate = new Date();
var referenceDate = new Date(2015, 0, 1);
var millisecondsDifference = currentDate - referenceDate;
var secondsElapsed = millisecondsDifference / 1000;
alert(`Seconds elapsed since January 1, 2015: ${secondsElapsed}`);

//q11
var currentDate = new Date();
var currentHours = currentDate.getHours();
var updatedDate = new Date(currentDate);
updatedDate.setHours(currentHours - 1);
alert(`Current date: ${currentDate}\n1 hours ago: ${updatedDate}`);

//q12
var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert(`100-years back: ${currentDate}`);

//q13
var age = +prompt("Enter your age:");
var year = new Date();
var birthYear = year.getFullYear();
alert(`Birth year: ${birthYear - age}`);

//q14
var units = 410;
var charges = 16;
var late = 350;
document.write(
    `<h1>K-Electric Bill</h1><br><p>Customer Name: <strong>ABC</strong><br>Month: <strong>${
    months_names[month]
  }</strong><br>Number of Units: <strong>${units}</strong><br>Charges per Unit: <strong>${charges}</strong><br><br>Net Amount Payable (Within Due Date): <strong>${
    units * charges
  }</strong><br>Late payment Surcharges: <strong>${late}</strong><br>Gross Amount Payable (After Due Date): <strong>${
    units * charges + late
  }</strong></p>`
);