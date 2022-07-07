const projectsRadio = document.querySelectorAll('input[name="projects"]');
const projectsTemp = document.querySelector("#projects-template");
const projectsLists = document.querySelector("#projects-lists");
const searchInput = document.querySelector("#search-input");
let projects = [];

const renderProjects = (data) => {
  projectsLists.textContent = "";
  data.forEach((project) => {
    const clone = projectsTemp.content.cloneNode(true);
    clone
      .querySelector(".appointment-left-card")
      .setAttribute("data-index", project.id);
    clone.querySelector(".appointment-left-a").href = `/project/${project.id}`;
    clone.querySelector(".appointment-left-a").textContent = project.name;
    clone.querySelector(".appointment-left-p").textContent =
      project.description;
    projectsLists.insertBefore(clone, projectsLists.children[0]);
  });
};

const handleProjects = (data) => {
  if (data.status === 200) {
    projects = data.data;
    renderProjects(projects);
  }
};

window.addEventListener("load", () => {
  getFetch("/api/v1/projects", handleProjects);
});

projectsRadio.forEach((input) => {
  input.addEventListener("change", (e) => {
    console.log("change", e.target.value);
    switch (e.target.value) {
      case "all":
        renderProjects(projects);
        break;
      case "now":
        renderProjects(projects.filter((project) => project.category_id === 2));
        break;
      case "end":
        renderProjects(projects.filter((project) => project.category_id === 1));
        break;
      default:
        break;
    }
  });
});

searchInput.addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();
  renderProjects(
    projects.filter((project) => project.name.toLowerCase().includes(search))
  );
});
