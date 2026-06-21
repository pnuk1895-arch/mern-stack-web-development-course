const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const messages = document.getElementById("messages");
const welcomeScreen = document.getElementById("welcome-screen");
const newChatBtn = document.getElementById("new-chat-btn");
const chatList = document.getElementById("chat-list");

// Load chats from localStorage
let chats = JSON.parse(localStorage.getItem("chats")) || [];

// Sidebar chat count
let chatCount = Number(localStorage.getItem("chatCount")) || 0;

// Event Listeners
sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        sendMessage();
    }

});

newChatBtn.addEventListener("click", newChat);

// Load data when page opens
loadChats();
loadSidebar();

function sendMessage() {

    const text = input.value.trim();

    if (text === "") return;

    addMessage(text, "user");

    input.value = "";

    input.focus();

    // Show typing indicator
    showTypingIndicator();

    setTimeout(() => {

        removeTypingIndicator();

        addMessage(
            "I received your message!",
            "ai"
        );

    }, 1000);

}

function addMessage(text, role, save = true) {

    const message = document.createElement("div");

    message.classList.add("message", role);

    const avatar =
        role === "user"
            ? "👤"
            : "🤖";

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

    // Add message
    messages.appendChild(message);

    // Auto scroll
    messages.scrollTop = messages.scrollHeight;

    // Save in localStorage
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

function showTypingIndicator() {

    const typing = document.createElement("div");

    typing.classList.add("message", "ai");

    typing.id = "typing-indicator";

    typing.innerHTML = `
        <div class="avatar">
            🤖
        </div>

        <div class="message-content">
            Typing...
        </div>
    `;

    messages.appendChild(typing);

    messages.scrollTop = messages.scrollHeight;
}

function removeTypingIndicator() {

    const typing = document.getElementById(
        "typing-indicator"
    );

    if (typing) {
        typing.remove();
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

function createChatItem() {

    chatCount++;

    const div = document.createElement("div");

    div.classList.add("chat-item");

    div.textContent = `Chat ${chatCount}`;

    chatList.appendChild(div);

    localStorage.setItem(
        "chatCount",
        chatCount
    );
}

function loadSidebar() {

    for (let i = 1; i <= chatCount; i++) {

        const div = document.createElement("div");

        div.classList.add("chat-item");

        div.textContent = `Chat ${i}`;

        chatList.appendChild(div);

    }

}

function newChat() {

    // Clear messages
    messages.innerHTML = "";

    // Reset chat array
    chats = [];

    // Remove localStorage chats
    localStorage.removeItem("chats");

    // Show welcome screen
    welcomeScreen.style.display = "flex";

    // Create sidebar item
    createChatItem();

    // Focus input
    input.focus();

}