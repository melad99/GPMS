const { signup, login, logout, restPassword } = require("./auth");
const {
  allProjects,
  addProject,
  deletePost,
  getProjectInfo,
  getAllStatus,
  getProjectInfoUsers,
  getProjectTechniques,
  postProjectUsers,
  addProjectTechniques,
  getUserProjects,
} = require("./projects");
const { getTasks, addTask, deleteComment } = require("./tasks");
const { getUserInfo, allUsers } = require("./users");
const { allContacts } = require("./contacts");
const { addAppointment, allAppointments } = require("./appointments");

module.exports = {
  signup,
  login,
  logout,
  allProjects,
  addProject,
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
};
