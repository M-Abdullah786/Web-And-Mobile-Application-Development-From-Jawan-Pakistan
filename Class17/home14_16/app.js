//   Chapter 15(Array I)
// 1.
var emptyArray = [];
console.log(`<br>Empty Array: ${emptyArray}`);

// 2.
var singleElementArray = ["Hello"];
console.log(`<br>Single Element Array: ${singleElementArray}`);

// 3.
var alphabet = ["h", "i", "j", "k"];
document.write(`<br>The letter is: ${alphabet[2]}`);

// 4.
var alphabetExtended = ["h", "i", "j", "k", "l", "m", "n", "o"];
var totalLength = alphabetExtended.length;
document.write(`<br>Total length of the array is: ${totalLength}`);

// 5.
var oneElementArray = ["First Element"];
oneElementArray[1] = "Second Element";
document.write(`<br>New element added: ${oneElementArray[1]}`);

// Chapter 16(Array II)
// 1.
var myArray = ["First Element"];
myArray.push("Second Element");
document.write(`<br>Last element in the array: ${myArray[myArray.length - 1]}`);

// 2.
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();
document.write(
    `<br>Alphabet after removing the last element: ${Alphabet.join(", ")}`
);

// 3.
Alphabet.push(5);
document.write(`<br>Alphabet after adding a number: ${Alphabet.join(", ")}`);

// Chapter 16(Array III)
// 1.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
document.write(
    `<br>Sizes after removing the first element: ${sizes.join(", ")}`
);

// 2.
sizes.unshift(1, 2, 3);
document.write(
    `<br>Sizes after adding numbers at the beginning: ${sizes.join(", ")}`
);

// 3.
var oneElementArray = ["First Element"];
oneElementArray.unshift("New First Element");
document.write(`<br>New first element: ${oneElementArray[0]}`);

// 4.
sizes.splice(2, 0, "L");
document.write(`<br>Sizes after inserting 'L': ${sizes.join(", ")}`);

// 5.
var regSizes = sizes.slice(0, 3);
document.write(`<br>regSizes array: " + ${regSizes.join(", ")}`);

// 6.
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3);
pets.splice(1, 0, "rabbit", "hamster");
document.write(`<br>Pets after modification: ${pets.join(", ")}`);

// 7.
pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);
document.write(
    `<br>Pets after removing 'cat' and 'ox': " + ${pets.join(", ")}`
);

// 8.
pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5);
document.write(`<br>Reduced pets array: ${reducedPets.join(", ")}`);