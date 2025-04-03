const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.getElementById("send-btn");

let userMessage = null;

const createChatLi = (message, className) => {
  const chatLi = document.createElement("div");
  chatLi.classList.add("chat", className);
  chatLi.innerHTML = `<p>${message}</p>`;
  return chatLi;
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatInput.value = ""; // Clear input

  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTop = chatbox.scrollHeight;

  // Simulate thinking time before sending a reply
  setTimeout(() => {
    chatbox.appendChild(createChatLi("Thinking...", "incoming"));
    chatbox.scrollTop = chatbox.scrollHeight;

    // Simulate bot response after 1 second
    setTimeout(() => {
      chatbox.querySelector(".incoming p").textContent = "Here is your response!";
    }, 1000);
  }, 500);
};

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
