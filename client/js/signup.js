/* eslint-disable no-undef */
const signupForm = document.querySelector("#sign-up");
const error = document.querySelector("#error");
const showPassword = document.querySelector("#showPassword");

const signupHandle = (data) => {
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

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    role: signupForm.role.value.trim(),
    username: signupForm.username.value.trim(),
    email: signupForm.email.value.trim(),
    password: signupForm.password.value.trim(),
  };

  console.log(data);
  if (
    data.role === "" ||
    data.username === "" ||
    data.email === "" ||
    data.password === ""
  ) {
    error.textContent = "All fields are required";
    return;
  }
  postFetch("/api/v1/signup", data, signupHandle);
});

// Check Cookie
const checkCookieSignup = (data) => {
  if (data.status === 200) window.location.href = "/index.html";
};

window.addEventListener("load", () => {
  getFetch("/api/v1/cookie", checkCookieSignup);
});

// Show Password
showPassword.addEventListener("click", () => {
  signupForm.password.classList.toggle("show");
  if (showPassword.classList.contains("show")) {
    showPassword.classList.remove("show");
    signupForm.password.type = "password";
  } else {
    showPassword.classList.add("show");
    signupForm.password.type = "text";
  }
});
