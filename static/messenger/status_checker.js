// Этот скрипт будет отправлять AJAX запросы на сервер для проверки статуса пользователей и обновления их на странице

function checkStatus() {
  $.ajax({
    url: "/messenger/check_status/",
    method: "GET",
    success: function (response) {
      for (var user in response) {
        if (response.hasOwnProperty(user)) {
          var status = response[user] ? "Online" : "Offline";
          $("#" + user + "_status").text(status);
        }
      }
    },
    error: function (xhr, status, error) {
      console.error("AJAX Error:", error);
    },
  });
}

$(document).ready(function () {
  console.log("status_checker.js загружен");
  checkStatus(); // Вызываем функцию проверки статуса сразу после загрузки страницы
  setInterval(checkStatus, 5000); // Затем вызываем ее каждые 5 секунд
});
