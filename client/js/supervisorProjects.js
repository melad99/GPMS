const supervisorProjects = document.querySelector("#supervisor-projects");
const supervisorProjectsTemp = document.querySelector(
  "#supervisor-projects-temp"
);
const addAppointment = document.querySelector("#add-appointment");
const logoutBtnn = document.querySelector("#logout-btnn");

let projectList = [];
const renderSupervisorProjects = (data) => {
  console.log(window.location.pathname);
  if (window.location.pathname === "/dashboard/projects/6") return;
  supervisorProjects.textContent = "";
  projectList = data?.data[0]?.id.map((projectId, index) => {
    return {
      id: projectId,
      name: data?.data[0].names[index],
      status: data?.data[0].status[index],
    };
  });
  projectList.forEach((project) => {
    if (project.status === 2) {
      const clone = supervisorProjectsTemp.content.cloneNode(true);
      clone.querySelector("#project-name").textContent = project.name;
      clone.querySelector(
        "#project-name"
      ).href = `/dashboard/projects/${project.id}`;
      supervisorProjects.insertBefore(clone, supervisorProjects.children[0]);
    }
  });
};

const checkCookiee = (data) => {
  if (data.status === 200) {
    getFetch(`/api/v1/user/${data.user.id}/projects`, renderSupervisorProjects);
  }
};

window.addEventListener("load", () => {
  getFetch("/api/v1/cookie", checkCookiee);
});

addAppointment.addEventListener("click", () => {
  const addAppoBtn = document.querySelector("#add-appo-btn");
  const addAppoForm = document.querySelector("#add-appo-form");
  const projectSelect = document.querySelector("#projectSelect");
  projectSelect.textContent = "";
  projectList.forEach((project) => {
    if (project.status === 2) {
      const opt = document.createElement("option");
      opt.value = project.id;
      opt.textContent = project.name;
      projectSelect.appendChild(opt);
    }
  });

  addAppoBtn.addEventListener("click", (e) => {
    // e.preventDefault();
    postFetch(
      `/api/v1/appointments`,
      {
        project_id: addAppoForm.projectSelect.value,
        place: addAppoForm.place.value,
        time: addAppoForm.time.value,
      },
      () => console.log("done")
    );
  });
});

logoutBtnn.addEventListener("click", () => {
  getFetch("/api/v1/logout", console.log);
});
