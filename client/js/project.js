const url = window.location.href.split("/");
const projectId = url[url.length - 1];
const title = document.querySelector("title");
const projectName = document.querySelector(".projectpage-head-h");
const projectDesc = document.querySelector("#project-desc");
const projectRating = document.querySelector("#project-rating");
const projectLink = document.querySelector("#project-link");
const studentsTemp = document.querySelector("#students-temp");
const students = document.querySelector("#students");
const supervisorName = document.querySelector("#supervisor-name");
const techniqueTemp = document.querySelector("#technique-temp");
const techniques = document.querySelector("#techniques");

const handleProjectInfoUsers = (data) => {
  const { status, data: users } = data;
  if (status === 200) {
    users.forEach(({ role, name }) => {
      console.log("role, name", role, name);
      if (role === "supervisor") {
        supervisorName.textContent = name[0];
        // name.forEach((name) => {
        //   supervisorName.textContent = name[0];
        // });
      } else if (role === "user") {
        students.textContent = "";
        name.forEach((name) => {
          const clone = studentsTemp.content.cloneNode(true);
          clone.querySelector("#students-name").textContent = name;
          students.insertBefore(clone, students.children[0]);
        });
      }
    });
  }
};

const handleProjectTechniques = (data) => {
  if (data.status === 200) {
    data.data?.name.forEach((name) => {
      const clone = techniqueTemp.content.cloneNode(true);
      clone.querySelector("#technique-name").textContent = name.trim();
      techniques.insertBefore(clone, techniques.children[0]);
    });
  }
};

handleProjectInfo = (data) => {
  const {
    status,
    data: { name, description, rating, link },
  } = data;
  console.log("projectInfo", data);
  getFetch(`/api/v1/project/${projectId}/users`, handleProjectInfoUsers);
  getFetch(`/api/v1/project/${projectId}/techniques`, handleProjectTechniques);
  if (status === 200) {
    title.textContent = name;
    projectName.textContent = name;
    projectDesc.textContent = description;
    projectRating.textContent = rating;
    projectLink.href = link;
  }
};

window.addEventListener("load", () => {
  getFetch(`/api/v1/project/${projectId}`, handleProjectInfo);
});
