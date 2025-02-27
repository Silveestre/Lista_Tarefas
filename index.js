document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const taskDescription = document.getElementById("taskDescription");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskTableBody = document.getElementById("taskTableBody");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const taskDesc = taskDescription.value.trim();

        if (taskText === "" || taskDesc === "") {
            console.log("entrou no if do if")
            alert("Por favor, preencha todos os campos.");
            return;
        }

        console.log("passou do if")

        const row = document.createElement("tr");
        const taskCell = document.createElement("td");
        const descCell = document.createElement("td");
        const actionCell = document.createElement("td");
        const deleteBtn = document.createElement("button");

        taskCell.textContent = taskText;
        descCell.textContent = taskDesc;
        deleteBtn.textContent = "Excluir";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function () {
            row.remove();
        });

        actionCell.appendChild(deleteBtn);
        row.appendChild(taskCell);
        row.appendChild(descCell);
        row.appendChild(actionCell);
        taskTableBody.appendChild(row);

        taskInput.value = "";
        taskDescription.value = "";
    });
});
