// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element for adding tasks
    const addForm = document.getElementById("addForm");
  
    // Get the task list element
    const taskList = document.getElementById("taskList");
  
    // Get the list title element
    const listTitle = document.getElementById("listTitle");
  
    // Function to create a new task item
    function createTaskItem(task) {
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
        <span>${task}</span>
        <button class="remove-btn">Remove</button>
      `;
  
      // Add event listener to the remove button
      const removeButton = taskItem.querySelector(".remove-btn");
      removeButton.addEventListener("click", function() {
        taskItem.remove();
      });
  
      return taskItem;
    }
  
    // Add event listener for form submission
    addForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Get the task input value
      const taskInput = document.getElementById("task");
      const task = taskInput.value;
  
      if (task !== "") {
        // Create a new task item
        const taskItem = createTaskItem(task);
  
        // Append the task item to the task list
        taskList.appendChild(taskItem);
  
        // Reset the task input
        taskInput.value = "";
      }
    });
  
    // Add event listener for list name input
    const listNameInput = document.getElementById("listName");
    listNameInput.addEventListener("input", function() {
      const listName = listNameInput.value;
      listTitle.textContent = listName !== "" ? listName : "To-Do List";
    });
  });
  