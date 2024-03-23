// Getting buttons to open a modal window
const modalBtns = document.querySelectorAll(".js-modal-open");

modalBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const modal = btn.getAttribute("data-modal");

    document.getElementById(modal).style.display = "block";
  });
});

// Getting buttons to close a modal window
const closeBtns = document.querySelectorAll(".modal-close");

closeBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const modal = btn.closest(".modal");
    modal.style.display = "none";
  });
});

window.onclick = function (e) {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
};

// Opening a modal window
function openModal() {
  document.body.classList.add("modal-open");
}

// Closing a modal window
function closeModal() {
  document.body.classList.remove("modal-open");
}
