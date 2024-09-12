// chapter 5
// q1
var first_num = 3
var sec_num = 5
var result = first_num + sec_num
document.write("Sum of", first_num, "and", sec_num, "is", result)

// q2
var result = first_num - sec_num
document.write("<br>Subtraction of", first_num, "and", sec_num, "is", result)

var result = first_num * sec_num
document.write("<br>Multiplication of", first_num, "and", sec_num, "is", result)

var result = first_num / sec_num
document.write("<br>Division of", first_num, "and", sec_num, "is", result)

var result = first_num % sec_num
document.write("<br>Mod of", first_num, "and", sec_num, "is", result)

// q3
// a
var num
    // b
document.write("<br>Value after variable declaration is:", num)
    // c
num = 5
    // d
document.write("<br>Initial value:", num)
    // e
var inc_num = num++
    // f
    document.write("<br>Value after increment:", num)
    // g
var aft_inc_num = num + 7
    // h
document.write("<br>Value after addition:", aft_inc_num)
    // i
var dec_num = --aft_inc_num
    // j
document.write("<br>Value after decrement:", dec_num)
    // k
document.write("<br>The remainder is:", dec_num / 3)
    // l
document.write("<br>The modulus is:", dec_num % 3)

// q4
var tick_pric = 600
var tick_buyer = 5
var total_cost = tick_pric * tick_buyer
document.write("<br>Total cost is:", total_cost)

// q5
document.write("<br>Table of 4")
for (var i = 1; i <= 10; i++) {
    document.write("<br>", 4, "x", i, "=", 4 * i)
}

// q6
// a
var cal_temp = 25
    // b
var fer_temp = 70
    // c
var celsius_to_fahrenheit = (fer_temp - 32) * 5 / 9
document.write("<br>Temperature in Celsius is:", celsius_to_fahrenheit)

// d
var fahrenheit_to_celsius = (cal_temp * 9 / 5) + 32
document.write("<br>Temperature in Fahrenheit is:", fahrenheit_to_celsius)

// q7
document.write("<br><h1>Shopping Cart</h1>")
    // a
var item_one = 650
    // b
var item_two = 100
    // c
var ord_item_one = 3
    // d
var ord_item_two = 7
    //e
var shipping_charges = 100
    //

document.write("<br>Price of item 1 is ", item_one)
document.write("<br>Quantity of item 1 is ", ord_item_one)
document.write("<br>Price of item 2 is ", item_two)
document.write("<br>Quantity of item 2 is ", ord_item_two)
document.write("<br>Shipping charges ", shipping_charges)
document.write("<br>Total cost of your order is ", item_one * ord_item_one + item_two * ord_item_two + shipping_charges)
    // q8

var total_marks = 980
var marks_obtained = 804
document.write("<br><h1>Marks Sheet<h1/>")
document.write("<br>Total Marks: ", total_marks)
document.write("<br>Marks obtained: ", marks_obtained)
document.write("<br>Percentage:", marks_obtained / total_marks * 100)
    //chapter6
    //Question 1
var a = 10;

document.write('<br>Value of a is ', a);
a = ++a;
document.write('<br><br>Value of ++a is ', a);
document.write('<br>Now the value of A is', a);


document.write('<br>Value of a++ is ', a);
a++;
document.write('<br>Now the value of A is', a);

--a;
document.write('<br>Value of --a is ', a);
document.write('<br>Now the value of A is', a);


document.write('<br>Value of a-- is ', a);
a--;
document.write('<br>Now the value of A is', a);

//QUESTION 2
var a = 2,
    b = 1;

a = --a;
document.write('<br><br>a = ', a);
b = --b;
var c = a - b;
document.write('<br>--a - --b = ', c);
b = ++b;
var d = c + b
document.write('<br>--a - --b + ++b = ', d);
b = b--;
var e = d + b;
document.write('<br>--a - --b + ++b + b-- = ', e);

//Question 3
var userName = prompt("Please enter your name:");
alert("Hello, " + userName + "! Welcome!");

//Question 5
var userInput = prompt("Enter a number for its multiplication table (leave blank for default 5):");

var number = userInput ? parseInt(userInput) : 5;

if (isNaN(number)) {
    number = 5;
}

var result = "<h2>Multiplication Table of " + number + "</h2><ul>";
for (var i = 1; i <= 10; i++) {
    result += "<li>" + number + " x " + i + " = " + (number * i) + "</li>";
}
result += "</ul>";

document.write(result);

// home chp.6-9
// chapter 6
// q1
x += 1;

// q2
x--;

// q3
var x = 50;
var y = x++;

// q4
var y = 50;
var z = --y;

// q5
newNum = num--;

// q6
anotherVar = myVar++;

// q7
var num = 10;
num++;
document.write(num);

// chapter 7
// q5
var cost = (2 + 2) * (4 + 10);

// q6
var units = 2 + (2 * 4) + 10;

// q7
var pressure = 4 / (2 * 4);

// chapter 8
// q2
var message = "Hello," + "Dolly";
alert(message);

// q4
alert("Pakistan" + " Zindabad");

// q5
var strWithNum = "I have " + 5 + " apples.";

// q6
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;

// chapter 9
// q1
var firstName = prompt("Enter first name");

// q2
var country = prompt("Country?", "China");

// q3
var yourName = prompt("Enter Your Name");

// q4
var response = prompt("What is your favorite color?", "Blue");

// q5
var message = "What is your favorite food?";
var defaultResponse = "Pizza";
var userResponse = prompt(message, defaultResponse);

// q6
var userResponse = prompt("What is your favorite hobby?", "Reading");
alert("Your favorite hobby is: " + userResponse);