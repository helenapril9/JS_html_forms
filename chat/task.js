document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("chat-widget__input");
    const messages = document.getElementById("chat-widget__messages"); 
    function addMessage(time, text, isClient = false) {
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message");
    if (isClient) {
        messageContainer.classList.add("message_client");
    }
      const timeElement = document.createElement("div");
      timeElement.classList.add("message__time");
      timeElement.textContent = time; 
      const textElement = document.createElement("div");
      textElement.classList.add("message__text");
      textElement.textContent = text;
      messageContainer.appendChild(timeElement);
      messageContainer.appendChild(textElement);
      messages.appendChild(messageContainer);
      messages.scrollTop = messages.scrollHeight; // Прокрутка вниз
    }  
    function generateResponse() {
      const responses = [
        "Что тебе нужно?",
        "У нас лучшие цены!",
        "Не мешай мне, я занят.",
        "Ты опять?",
        "Зачем ты здесь?",
      ]; 
      const randomIndex = Math.floor(Math.random() * responses.length);
      const response = responses[randomIndex];
      const time = getCurrentTime();
      addMessage(time, response);
    }  
    function getCurrentTime() {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
    }  
    input.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        const text = input.value.trim();
        if (text !== "") {
          const time = getCurrentTime();
          addMessage(time, text, true);
          input.value = "";
          generateResponse();
        }
      }
    });  
    const badge = document.querySelector(".chat-widget");
    badge.addEventListener("click", function() {
      badge.classList.add("chat-widget_active");
      input.focus();
    });
  });
  