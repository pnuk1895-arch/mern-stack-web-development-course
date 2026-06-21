const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const messages = document.getElementById("messages");
const welcomeScreen = document.getElementById("welcome-screen");
const newChatBtn = document.getElementById("new-chat-btn");

// Load chats from localStorage
let chats = JSON.parse(localStorage.getItem("chats")) || [];

// Events
sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});

newChatBtn.addEventListener("click", newChat);

// Load old chats when page opens
loadChats();

function sendMessage() {

    const text = input.value.trim();

    if (text === "") return;

    addMessage(text, "user");

    input.value = "";

    input.focus();

    setTimeout(() => {

        addMessage("I received your message!", "ai");

    }, 1000);
}

function addMessage(text, role, save = true) {

    const message = document.createElement("div");

    message.classList.add("message", role);

    const avatar = role === "user" ? "👤" : "🤖";

    message.innerHTML = `
        <div class="avatar">
            ${avatar}
        </div>

        <div class="message-content">
            ${text}
        </div>
    `;

    // Hide welcome screen
    welcomeScreen.style.display = "none";

    // Add message to UI
    messages.appendChild(message);

    // Auto scroll
    messages.scrollTop = messages.scrollHeight;

    // Save to localStorage
    if (save) {

        chats.push({
            text,
            role
        });

        localStorage.setItem(
            "chats",
            JSON.stringify(chats)
        );
    }
}

function loadChats() {

    chats.forEach(chat => {

        addMessage(
            chat.text,
            chat.role,
            false
        );

    });
}

function newChat() {

    // Clear messages from UI
    messages.innerHTML = "";

    // Clear chats array
    chats = [];

    // Remove from localStorage
    localStorage.removeItem("chats");

    // Show welcome screen
    welcomeScreen.style.display = "flex";

    // Focus input
    input.focus();
}