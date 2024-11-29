document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");

  // Create a new task item
  const taskItem = document.createElement("li");

  // Add task text
  const taskTextNode = document.createTextNode(taskText);
  taskItem.appendChild(taskTextNode);

  // Mark as complete
  taskItem.addEventListener("click", function () {
    taskItem.classList.toggle("completed");
  });

  // Add delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  // Clear input
  taskInput.value = "";
});
