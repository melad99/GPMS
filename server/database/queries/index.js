const {
  checkUsernameQuery,
  checkEmailQuery,
  createNewUserQuery,
} = require("./signup");

const {
  addProjectQuery,
  getAllProjectsQuery,
  deletePostQuery,
  getProjectInfoQuery,
  getStatusQuery,
  getProjectInfoUsersQuery,
  getProjectTechniquesQuery,
  postProjectUsersQuery,
  addProjectTechniquesQuery,
  getUserProjectsQuery,
} = require("./projects");

const { getTasksQuery, addTaskQuery, deleteCommentQuery } = require("./tasks");

const { getUserInfoQuery, getAllUsersQuery } = require("./users");
const { getContactQuery } = require("./contacts");
const {
  addAppointmentQuery,
  getAllAppointmentsQuery,
  checkAppointmentQuery,
} = require("./appointments");

module.exports = {
  checkUsernameQuery,
  checkEmailQuery,
  createNewUserQuery,
  addProjectQuery,
  getAllProjectsQuery,
  deletePostQuery,
  getTasksQuery,
  addTaskQuery,
  deleteCommentQuery,
  getUserInfoQuery,
  getContactQuery,
  getAllUsersQuery,
  getProjectInfoQuery,
  addAppointmentQuery,
  getAllAppointmentsQuery,
  getStatusQuery,
  checkAppointmentQuery,
  getProjectInfoUsersQuery,
  getProjectTechniquesQuery,
  postProjectUsersQuery,
  addProjectTechniquesQuery,
  getUserProjectsQuery,
};
