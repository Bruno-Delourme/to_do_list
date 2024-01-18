document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.querySelector("#add-task");

  addBtn.addEventListener("click", () => {
    const taskValue = document.querySelector("#task-input").value;

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
      document.querySelector("#task-input").value = ""; // Clear input field
    }
  });
});
