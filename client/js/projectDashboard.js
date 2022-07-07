const projectNameHeader = document.querySelector("#project-name-header");
const projectData = document.querySelector("#project-data");
const projectLink = document.querySelector("#project-link");
const projectStudents = document.querySelector("#project-students");
const tasksTemp = document.querySelector("#tasks-temp");
const tasksToDo = document.querySelector("#tasks-toDo");
const tasksInProgress = document.querySelector("#tasks-inProgress");
const tasksDone = document.querySelector("#tasks-done");
const taskPlus = document.querySelectorAll(".task-dots");
const addTaskModal = document.querySelector(".bg-modal-tasks");
const CloseTaskModal = document.querySelector(".modal-app-close");
const addTaskBtn = document.querySelector("#add-task-btn");
const addTaskForm = document.querySelector("#add-task-form");

const handleTasks = (data) => {
  if (data.status === 200) {
    data?.data.forEach((task) => {
      const clone = tasksTemp.content.cloneNode(true);
      if (task.status === "للعمل عليهم") {
        clone.querySelector(".text-task").textContent = task.content;
        tasksToDo.insertBefore(clone, tasksToDo.children[0]);
      }
      if (task.status === "تحت العمل") {
        clone.querySelector(".text-task").textContent = task.content;
        tasksInProgress.insertBefore(clone, tasksInProgress.children[0]);
      }
      if (task.status === "تم عملهم") {
        clone.querySelector(".text-task").textContent = task.content;
        tasksDone.insertBefore(clone, tasksDone.children[0]);
      }
    });
  }
};

window.addEventListener("load", () => {
  const link = window.location.href.split("/");
  const projectId = link[link.length - 1];
  projectData.href = `/project/${projectId}`;
  projectLink.href = `/project/${projectId}`;
  projectStudents.href = `/project/${projectId}`;
  getFetch(`/api/v1/tasks/${projectId}`, handleTasks);
});

taskPlus.forEach((plus) => {
  plus.addEventListener("click", () => {
    addTaskModal.classList.toggle("hide");
  });
});

CloseTaskModal.addEventListener("click", () => {
  addTaskModal.classList.toggle("hide");
});

addTaskBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  const link = window.location.href.split("/");
  const projectId = link[link.length - 1];
  postFetch(
    `/api/v1/task`,
    {
      content: addTaskForm.content.value,
      status: addTaskForm.status.value,
      project_id: projectId,
    },
    handleTasks
  );
});

dragula([tasksToDo, tasksInProgress, tasksDone]);

logoutBtnn.addEventListener("click", () => {
  getFetch("/api/v1/logout", console.log);
});
