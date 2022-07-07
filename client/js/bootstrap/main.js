/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

document
  .getElementById("add-appointment")
  .addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "flex";
  });

document
  .querySelector(".modal-appo-close")
  .addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "none";
  });

document.getElementById("add-project").addEventListener("click", function () {
  document.querySelector(".bg-modaladd").style.display = "flex";
});

document
  .querySelector(".modal-addproject-close")
  .addEventListener("click", function () {
    document.querySelector(".bg-modaladd").style.display = "none";
  });
