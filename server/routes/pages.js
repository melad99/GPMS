const pagesRouter = require("express").Router();

const {
  signupPage,
  loginPage,
  restPasswordPage,
  aboutUsPage,
  appointmentsPage,
  projectPage,
  currentProjectPage,
  supervisorProjectsPage,
  projectsPage,
  supervisorDashboardPage,
  oldProjectsPage,
  adminPage,
  contactsPage,
  studentProjectPage,
} = require("../controllers");

pagesRouter.get("/signup", signupPage);
pagesRouter.get("/login", loginPage);
pagesRouter.get("/rest-password", restPasswordPage);
pagesRouter.get("/about-us", aboutUsPage);
pagesRouter.get("/appointments", appointmentsPage);
pagesRouter.get("/projects", projectsPage);
pagesRouter.get("/project/:id", projectPage);
pagesRouter.get("/student-dashboard/:projectId", studentProjectPage);
pagesRouter.get("/dashboard/projects", supervisorProjectsPage);
pagesRouter.get("/dashboard/projects/:projectId", currentProjectPage);
pagesRouter.get("/supervisor-dashboard", supervisorDashboardPage);
pagesRouter.get("/dashboard/old-projects", oldProjectsPage);
pagesRouter.get("/dashboard/admin", adminPage);
pagesRouter.get("/dashboard/contacts", contactsPage);
// pagesRouter.get("/dashboard/projectDashboard", contactsPage);

module.exports = pagesRouter;
