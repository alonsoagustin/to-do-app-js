import { toDoApp } from "./script.js";

const taskManager = toDoApp();

const formNewTask = document.getElementById("new-task");

const createTask = (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const dueDate = new Date(document.getElementById("dueDate").value);
  const category = document.getElementById("category").value;
  const priority = document.getElementById("priority").value;
  const newTask = taskManager.createTask(title, dueDate, priority, category);
  taskManager.addTask(newTask);
  formNewTask.reset();
  displayTasks(newTask);
};

const displayTasks = (task) => {
  const taskElement = document.createElement("article");
  let priorityClass = "text-bg-secondary";

  if (task.priority === "Medium") {
    priorityClass = "text-bg-warning";
  } else if (task.priority === "High") {
    priorityClass = "text-bg-danger";
  }

  taskElement.dataset.id = task.id;
  taskElement.className = "card mt-2";
  taskElement.innerHTML = `
    <header class="card-header d-flex justify-content-between align-items-center" style="height: 2rem; color: #ffffff; background-color: rgba(13, 109, 253, 0.8);">
      <h4 class="mb-0" style="font-size: 0.75rem">${task.category}</h4>
      <div class="dropdown">
        <button type="button" class="btn btn-outline-light btn-sm dropdown-toggle" style="--bs-btn-padding-y: 0.07rem; --bs-btn-padding-x: 0.4rem; --bs-btn-font-size: 0.58rem;" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Options for task"></button>
        <ul class="dropdown-menu">
          <li>
            <a class="edit dropdown-item" href="#"><i class="bi bi-pencil me-2"></i>Edit</a>
          </li>
          <li>
            <a class="delete dropdown-item" href="#"><i class="bi bi-trash me-2"></i>Delete</a>
          </li>
          <li>
            <a class="done dropdown-item" href="#"><i class="bi bi-check2-square me-2"></i>Done</a>
          </li>
        </ul>
      </div>
    </header>
    <section class="card-body">
      <h3 class="card-title fs-5">${task.title}</h3>
      <div class="mt-2 d-flex justify-content-between align-items-center">
        <p class="mb-0 text-secondary" style="font-size: 0.85rem"><i class="bi bi-calendar-plus me-1 text-primary fs-6"></i> ${task.createdAt}</p>
        <p class="mb-0 text-secondary" style="font-size: 0.85rem"><i class="bi bi-flag me-1 text-primary fs-6"></i>${task.dueDate}</p>
        <p class="mb-0"><span class="badge ${priorityClass}">${task.priority}</span></p>
      </div>
      <ul class="mt-2 nav">
        <li class="me-1">
          <img class="rounded-circle" src="user-avatar.png" alt="Avatar of user" width="25" />
        </li>
        <li class="me-1">
          <img class="rounded-circle" src="user-avatar-2.png" alt="Avatar of another user" width="25" />
        </li>
        <li class="me-1">
          <button class="btn btn-outline-primary rounded-circle" style="--bs-btn-padding-y: 0.2rem; --bs-btn-padding-x: 0.4rem; --bs-btn-font-size: 0.65rem;">
            <i class="bi bi-plus-lg"></i>
          </button>
        </li>
      </ul>
    </section>
    `;
  taskList.appendChild(taskElement);
};

formNewTask.addEventListener("submit", createTask);
