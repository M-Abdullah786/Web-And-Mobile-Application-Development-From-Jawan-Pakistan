let input = document.getElementById("inputField");

function getValue(btnVal) {
    input.value += btnVal;
}

function clearAll() {
    input.value = "";
}

function backspace() {
    input.value = input.value.slice(0, -1);
}

function percentage() {
    if (input.value) {
        input.value = input.value / 100;
    }
}

function result() {
    if (input.value) {
        input.value = eval(input.value);
    } else {
        input.value = "SyntaxError";
    }
}