/* eslint-disable no-undef */
const loginForm = document.querySelector("#log-in");
const error = document.querySelector("#error");
const showPassword = document.querySelector("#showPassword");

const loginHandle = (data) => {
  console.log("data", data);
  if (data.status === 400) {
    error.textContent = data.message;
  } else if (data.status === 500) {
    handleErrPages(500);
  } else if (data.status === 404) {
    handleErrPages(404);
  } else if (data.status === 201) {
    window.location.href = "/index.html";
  }
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    username: loginForm.username.value.trim(),
    password: loginForm.password.value.trim(),
  };
  console.log("dataInfo", data);
  if (data.username === "" || data.password === "") {
    error.textContent = "All fields are required";
    return;
  }
  postFetch("/api/v1/login", data, loginHandle);
});

// Check Cookie
const checkCookieLogin = (data) => {
  if (data.status === 200) window.location.href = "/index.html";
};

window.addEventListener("load", () => {
  getFetch("/api/v1/cookie", checkCookieLogin);
});

// Show Password
showPassword.addEventListener("click", () => {
  loginForm.password.classList.toggle("show");
  if (showPassword.classList.contains("show")) {
    showPassword.classList.remove("show");
    loginForm.password.type = "password";
  } else {
    showPassword.classList.add("show");
    loginForm.password.type = "text";
  }
});
