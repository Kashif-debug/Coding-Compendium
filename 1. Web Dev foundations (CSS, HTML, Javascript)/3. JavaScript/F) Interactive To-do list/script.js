const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    // Creating a new task element
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskItem.classList.add("task"); // Adds the CSS class "task" (so it looks styled)

    // add a click event to remove task
    taskItem.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    });

    taskList.appendChild(taskItem);

    taskInput.value = "";
}
