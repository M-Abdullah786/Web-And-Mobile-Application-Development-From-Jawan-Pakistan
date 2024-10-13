function showAlert() {
    alert("Thanks for purchasing a phone from us");
}

function devareRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function changeImage() {
    document.getElementById("hoverImage").src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWRaIUYW6W8mWGutUKJkRbKn2rOkYq9HN4Dg&s";
}

function resetImage() {
    document.getElementById("hoverImage").src =
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9cd772c6-96ce-4561-aafc-e8e4d50eaa43/dfle3cd-961c063f-1b19-4916-8bec-625f583696e5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljZDc3MmM2LTk2Y2UtNDU2MS1hYWZjLWU4ZTRkNTBlYWE0M1wvZGZsZTNjZC05NjFjMDYzZi0xYjE5LTQ5MTYtOGJlYy02MjVmNTgzNjk2ZTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hRlcEvdSLrN0MHS5fHBtj4yiO0h6SIIAXTxZPsyJG0s";
}

var counter = 0;

function increaseCounter() {
    counter++;
    updateCounterDisplay();
}

function decreaseCounter() {
    counter--;
    updateCounterDisplay();
}

function updateCounterDisplay() {
    document.getElementById("counterValue").innerText = counter;
}