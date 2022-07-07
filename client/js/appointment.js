const inputs = document.querySelectorAll('input[name="appointment"]');
const time = document.querySelectorAll('input[name="time"]')[0];
const date = document.querySelectorAll('input[name="date"]')[0];
const appointmentTemp = document.querySelector("#appointment-template");
const appointmentsList = document.querySelector("#appointments-list");
let appointments = [];

const renderAppointments = (data) => {
  appointmentsList.textContent = "";
  data.forEach((appointment) => {
    const dateAndTime = new Date(appointment.time);
    const time = dateAndTime.toLocaleTimeString();
    const date = dateAndTime.toLocaleDateString();
    const clone = appointmentTemp.content.cloneNode(true);
    clone
      .querySelector(".appointment-left-card")
      .setAttribute("data-index", appointment.projectid);
    clone.querySelector(
      ".appointment-left-a"
    ).href = `/project/${appointment.projectid}`;
    clone.querySelector(".appointment-left-a").textContent = appointment.name;
    clone.querySelector(".appointment-left-p").textContent =
      appointment.description;
    clone.querySelector("#place").textContent = appointment.place;
    clone.querySelector("#time").textContent = time;
    clone.querySelector("#date").textContent = date;
    appointmentsList.insertBefore(clone, appointmentsList.children[0]);
  });
};

const handleAppointments = (data) => {
  if (data.status === 200) {
    appointments = data.data;
    renderAppointments(appointments);
  }
};

window.addEventListener("load", () => {
  getFetch("/api/v1/appointments", handleAppointments);
});

const handleToday = () => {
  return appointments.filter((appointment) => {
    const date = new Date(appointment.time);
    if (date.toLocaleDateString() === new Date().toLocaleDateString()) {
      return appointment;
    }
  });
};

const handleTomorrow = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return appointments.filter((appointment) => {
    const date = new Date(appointment.time);
    if (tomorrow.toDateString() === date.toDateString()) {
      // if (dateAndTime.getDate() === new Date().getDate() + 1) {
      return appointment;
    }
  });
};

// function nextweek() {
//   var today = new Date();
//   var nextweek = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() + 7
//   );
//   return nextweek;
// }

// if (
//   dateAndTime.getDate() >= new Date().getDate() + 1 &&
//   dateAndTime.getDate() <= new Date().getDate() + 7
// ) {
//   return appointment;
// }

const handleWeek = () => {
  return appointments.filter((appointment) => {
    const date = new Date(appointment.time);
    if (
      date.getMonth() >= new Date().getMonth() &&
      date.getDate() >= new Date().getDate() + 1 &&
      date.getDate() <= new Date().getDate() + 7
    ) {
      return appointment;
    }
  });
};

// const handleMonth = () => {
//   return appointments.filter((appointment) => {
//     const dateAndTime = new Date(appointment.time);
//     console.log("date", dateAndTime.getDate());
//     if (
//// date.getFullYear() >= new Date().getFullYear() &&
//       dateAndTime.getDate() >= new Date().getDate() + 1 &&
//       dateAndTime.getDate() <= new Date().getDate() + 30
//     ) {
//       return appointment;
//     }
//   });
// };

const handleMonth = () => {
  return appointments.filter((appointment) => {
    const today = new Date();
    const month = new Date();
    today.setDate(today.getDate() + 1);
    month.setDate(month.getDate() + 30);
    const date = new Date(appointment.time);
    date.setDate(date.getDate());
    if (date >= today && date <= month) {
      return appointment;
    }
  });
};

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    switch (e.target.value) {
      case "all":
        renderAppointments(appointments);
        break;
      case "today":
        renderAppointments(handleToday());
        break;
      case "tomorrow":
        renderAppointments(handleTomorrow());
        break;
      case "week":
        renderAppointments(handleWeek());
        break;
      case "month":
        renderAppointments(handleMonth());
        break;
      default:
        break;
    }
  });
});

function tConvert(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
}

const handleTime = (value) => {
  return appointments.filter((appointment) => {
    const date = new Date(appointment.time);
    if (date.toLocaleTimeString() === tConvert(value)) {
      return appointment;
    }
  });
};

time.addEventListener("change", ({ target: { value } }) => {
  console.log(value);
  renderAppointments(handleTime(value));
});

time.addEventListener("blur", (e) => {
  if (!time.value) time.type = "text";
});

time.addEventListener("focus", (e) => {
  if (!time.value) time.type = "time";
});

const handleDate = (value) => {
  return appointments.filter((appointment) => {
    const date = new Date(appointment.time);
    if (date.toLocaleDateString() === new Date(value).toLocaleDateString()) {
      return appointment;
    }
  });
};
date.addEventListener("change", ({ target: { value } }) => {
  renderAppointments(handleDate(value));
});

date.addEventListener("blur", (e) => {
  if (!date.value) date.type = "text";
});

date.addEventListener("focus", (e) => {
  if (!date.value) date.type = "date";
});
