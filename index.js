document.addEventListener("DOMContentLoaded", function () {
  submitForm();
  // showTask();
});

//this function has an event listener
function submitForm() {
  const myForm = document.getElementById("myForm");
  console.log(myForm); //debugging
  myForm.addEventListener("submit", (event) => {
    console.log("clicked");
    event.preventDefault();

    const task = document.getElementById("task").value;
    const category = document.getElementById("category").value;
    const deadline = document.getElementById("date").value;
    const message = document.getElementById("message").value;
    // const task = document.getElementById("task").value;

    const newTask = {
      task,
      category,
      deadline,
      message,
    };
    //sending it to server
    fetch("http://localhost:4000/tasks", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });
    showTask();
  });
}

function showTask() {
  fetch("http://localhost:4000/tasks")
    .then((res) => res.json())
    .then((tasks) => {
      const taskContainer = document.getElementById("containerOne");
      taskContainer.innerHTML = "";

      const taskElement = document.createElement("div");

      tasks.forEach((task) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("containerOne");
        taskElement.innerHTML = `
              <div class="containerOne" id="containerOne">
              <h3>My Tasks</h3>
               <span>${task.task}</span>
                 <br />
               <span>${task.category}</span>
               <span>Due: ${task.deadline}</span>
                 <br />
                 <p>${task.message}</p>
                  <button onclick="deleteTask(${task.id})">Delete Task</button>
              </div>
        `;
        taskContainer.appendChild(taskElement);
      });
    });
}
//
function deleteTask(id) {
  fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" }).then(() =>
    showTask()
  ); // Refresh the list after deleting
}
