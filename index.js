document.addEventListener("DOMContentLoaded", function () {
  submitForm();
});

//this function has an event listener
function submitForm() {
  const myForm = document.getElementById("myForm");
  console.log(myForm); //debugging
  myForm
    .addEventListener("submit", (Event) => {
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
      fetch("", {
        method: "POST",
        headers: {},
        body: JSON.stringify(newTask),
      });
    })
    .then((res) => res.json())
    .then((data) => {});
}

function showTask() {}
