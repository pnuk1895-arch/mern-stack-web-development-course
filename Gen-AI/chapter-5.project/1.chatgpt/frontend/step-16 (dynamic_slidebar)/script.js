const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const messages = document.getElementById("messages");
const welcomeScreen = document.getElementById("welcome-screen");
const newChatBtn = document.getElementById("new-chat-btn");
const chatList = document.getElementById("chat-list");

let chats = JSON.parse(localStorage.getItem("chats")) || [];
let chatCount = Number(localStorage.getItem("chatCount")) || 0;

// Events
sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});

newChatBtn.addEventListener("click", newChat);

// Load previous chats
loadChats();
loadSidebar();

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

    welcomeScreen.style.display = "none";

    messages.appendChild(message);

    messages.scrollTop = messages.scrollHeight;

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

    messages.innerHTML = "";

    chats = [];

    localStorage.removeItem("chats");

    welcomeScreen.style.display = "flex";

    createChatItem();

    input.focus();
}