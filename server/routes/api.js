const apiRouter = require("express").Router();

const {
  signup,
  login,
  logout,
  addProject,
  allProjects,
  deletePost,
  getTasks,
  addTask,
  deleteComment,
  getUserInfo,
  allContacts,
  allUsers,
  getProjectInfo,
  restPassword,
  addAppointment,
  allAppointments,
  getAllStatus,
  getProjectInfoUsers,
  getProjectTechniques,
  postProjectUsers,
  addProjectTechniques,
  getUserProjects,
} = require("../controllers");

const { checkLoggedIn, checkCookie } = require("../middleware");

apiRouter.post("/signup", signup);
apiRouter.post("/login", login);
apiRouter.post("/rest-password", restPassword);
apiRouter.get("/projects", allProjects);
apiRouter.get("/cookie", checkCookie);
apiRouter.get("/project/:projectId", getProjectInfo);
apiRouter.get("/project/:projectId/users", getProjectInfoUsers);
apiRouter.get("/project/:projectId/techniques", getProjectTechniques);
apiRouter.get("/user/:userId", getUserInfo);

apiRouter.get("/appointments", allAppointments);

apiRouter.use(checkLoggedIn);
apiRouter.get("/user/:userId/projects", getUserProjects);
apiRouter.post("/project/:projectId/users", postProjectUsers);
apiRouter.post("/project/:projectId/techniques", addProjectTechniques);
apiRouter.get("/logout", logout);
// apiRouter.get("/user/:userId/tasks", getUserTasks);
apiRouter.get("/tasks/:projectId", getTasks);
apiRouter.post("/project", addProject);
apiRouter.post("/task", addTask);
apiRouter.post("/appointments", addAppointment);
apiRouter.get("/status", getAllStatus);
// apiRouter.get("/post/:postId", deletePost);
// apiRouter.delete("/comment/:commentId", deleteComment);

apiRouter.get("/contacts", allContacts);
apiRouter.get("/users", allUsers);

module.exports = apiRouter;
