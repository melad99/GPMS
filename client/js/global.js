const userImg = document.querySelector("#userImg");
const userInfo = document.querySelector("#userInfo");
const userLink = document.querySelector("#userLink");
// Check Cookies
let user;
const actions = document.querySelector("#actions");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userRole = document.querySelector("#userRole");
const checkCookie = (data) => {
  if (data.status === 200) {
    user = data.user;
    userName.textContent = user.username;
    userEmail.textContent = user.email;
    userRole.textContent = user.role;
    if (user.role === "supervisor") userLink.href = "/supervisor-dashboard";
    else if (user.role === "admin") userLink.href = "/dashboard/admin";
    else if (user.role === "user") userLink.href = "/student-dashboard/6";

    userRole.textContent = user.role;
    userImg.classList.remove("hide");
    userImg.classList.add("show");
    actions.classList.remove("show");
    actions.classList.add("hide");
  }
};

document.addEventListener("click", (e) => {
  if (e.target.id !== "userInfo") {
    !userInfo.classList.contains("hide") && userInfo.classList.add("hide");
  }
  if (e.target.id === "userImg") {
    userInfo.classList.toggle("hide");
  }
  if (
    e.target.id === "logout" ||
    e.target.id === "userName" ||
    e.target.id === "userEmail" ||
    e.target.id === "userRole"
  ) {
    userInfo.classList.remove("hide");
  }
});

// userImg.addEventListener("click", () => {
//   userInfo.classList.toggle("hide");
// });

window.addEventListener("load", () => {
  getFetch("/api/v1/cookie", checkCookie);
});

// Error
const handleErrPages = (status) => {
  if (status === 404) {
    window.location.href = "/html/404.html";
  } else if (status === 500) {
    window.location.href = "/html/500.html";
  }
};

// Loading
const loading = document.querySelector(".loading");
const showLoading = () => {
  loading.style.display = "block";
};
const hideLoading = () => {
  loading.style.display = "none";
};

// Log Out
const logout = (data) => {
  if (data.status === 205) window.location.href = "/index.html";
};

const logoutBtn = document.querySelector("#logout");
if (logoutBtn)
  logoutBtn.addEventListener("click", () => getFetch("/api/v1/logout", logout));
