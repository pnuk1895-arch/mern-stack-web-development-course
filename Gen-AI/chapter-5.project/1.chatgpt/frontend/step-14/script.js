const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const messages = document.getElementById("messages");
const welcomeScreen = document.getElementById("welcome-screen");
const newChatBtn = document.getElementById("new-chat-btn");

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", (e) => {

    if(e.key === "Enter"){
        sendMessage();
    }

});

newChatBtn.addEventListener("click", newChat);

function sendMessage(){

    const text = input.value.trim();

    if(text === "") return;

    addMessage(text, "user");

    input.value = "";

    input.focus();

    setTimeout(() => {

        addMessage("I received your message!", "ai");

    }, 1000);

}

function addMessage(text, role){

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
}

function newChat(){

    messages.innerHTML = "";

    welcomeScreen.style.display = "flex";

    input.focus();
}
