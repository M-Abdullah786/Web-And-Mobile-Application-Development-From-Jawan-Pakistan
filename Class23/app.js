const newTask = document.getElementById("input");
const addTask = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Add a task to the list when button is clicked
addTask.addEventListener("click", () => {
    addToList();
});

// Add a task to the list when Enter key pressed
newTask.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        addToList();
    }
});

function addToList() {
    let text = newTask.value;
    if (text) {
        // Create the listItems
        const listItem = document.createElement("li");
        listItem.className = "task-item";
        const checkbox = document.createElement("button");
        checkbox.className = "btn-check";
        checkbox.innerHTML = `<i class="fa-solid fa-check"><i/>`;
        const span = document.createElement("span");
        span.className = "text";
        span.textContent = text;
        const closeButton = document.createElement("button");
        closeButton.className = "btn-close";
        closeButton.innerHTML = `<i class="fa-solid fa-xmark"><i/>`;

        // Append the buttons and text to the list
        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        listItem.appendChild(closeButton);

        // Append the listItem to the task list
        taskList.appendChild(listItem);

        // Clear input field
        newTask.value = "";

        // Add functionality for close button click
        closeButton.addEventListener("click", () => {
            taskList.removeChild(listItem);
        });

        // Add functionality for checkbox click (optional)
        checkbox.addEventListener("click", () => {
            listItem.classList.toggle("active");
        });
    }
}