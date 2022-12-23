"strict mode";

const btnMark = document.querySelector(".btn__mark");
const notifNumbers = document.querySelector(".notif__numbers");
const notif = document.querySelectorAll(".notif__detail");

btnMark.addEventListener("click", function (e) {
  notifNumbers.textContent = 0;
  notif.forEach((n) => n.classList.remove("notif__unread"));
});
