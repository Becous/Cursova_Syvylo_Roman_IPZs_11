const botToken = "6908668824:AAEU9PAJenSa_kAxH1WemCaVYy6q7q2lYDs";
const chatId = "308432208";
function sendMessage() {
  const nameInput = document.querySelector('input[name="name"]').value;
  const emailInput = document.querySelector('input[name="email"]').value;
  const messageInput = document.querySelector('textarea[name="message"]').value;
  // Ідентифікатор групи або користувача, куди ви хочете надіслати повідомлення

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const message = `Name: ${nameInput}, Email: ${emailInput}%0AПовідомлення: ${messageInput}`; // Формування повідомлення з даними

  fetch(`${url}?chat_id=${chatId}&text=${message}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        console.log("Повідомлення відправлено до Telegram!");
        // Додайте код для обробки успішної відправки повідомлення
      } else {
        console.error("Не вдалося відправити повідомлення до Telegram");
        // Додайте код для обробки помилки відправки повідомлення
      }
    })
    .catch((error) => {
      console.error("Помилка відправлення повідомлення до Telegram:", error);
      // Обробка інших помилок
    });
}
function sendMessageModal() {
  const nameInput = document.querySelector('input[name="name_modal"]').value;
  const emailInput = document.querySelector('input[name="email_modal"]').value;
  const messageInput = document.querySelector('textarea[name="message_modal"]').value;
  // Ідентифікатор групи або користувача, куди ви хочете надіслати повідомлення

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const message = `Name: ${nameInput}, Email: ${emailInput}%0AПовідомлення: ${messageInput}`; // Формування повідомлення з даними

  fetch(`${url}?chat_id=${chatId}&text=${message}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        console.log("Повідомлення відправлено до Telegram!");
        // Додайте код для обробки успішної відправки повідомлення
      } else {
        console.error("Не вдалося відправити повідомлення до Telegram");
        // Додайте код для обробки помилки відправки повідомлення
      }
    })
    .catch((error) => {
      console.error("Помилка відправлення повідомлення до Telegram:", error);
      // Обробка інших помилок
    });
}
