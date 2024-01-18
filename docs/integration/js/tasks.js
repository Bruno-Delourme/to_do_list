document.addEventListener("DOMContentLoaded", function () {
  
//on stocke le bouton(pour add) et on stock l'input
  const addBtn = document.querySelector("#add-task");
  const taskInput = document.querySelector("#task-input");

//on ecouter l'event au click
  addBtn.addEventListener("click", addTask);

  function addTask() {
    const taskValue = taskInput.value;
    if (taskValue) {
      const li = document.createElement("li");
      li.textContent = taskValue;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Supprimer";
      deleteButton.onclick = function () {
        li.remove();
      };
      li.appendChild(deleteButton);
      document.querySelector("#task-ul").appendChild(li);
      taskInput.value = "";
    }

    //on crée une autre posibilité d'écoute d'event au press "Enter"
    taskInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  }
});
