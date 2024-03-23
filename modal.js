// Получение кнопок для открытия модального окна
const modalBtns = document.querySelectorAll(".js-modal-open");

modalBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const modal = btn.getAttribute("data-modal");

    document.getElementById(modal).style.display = "block";
  });
});

// Получение кнопок для закрытия модального окна
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

// Открытие модального окна
function openModal() {
  // Добавить класс на <body> для запрета прокрутки заднего фона
  document.body.classList.add("modal-open");
  // Открыть модальное окно
  // your code here
}

// Закрытие модального окна
function closeModal() {
  // Удалить класс с <body> для разрешения прокрутки заднего фона
  document.body.classList.remove("modal-open");
  // Закрыть модальное окно
  // your code here
}
