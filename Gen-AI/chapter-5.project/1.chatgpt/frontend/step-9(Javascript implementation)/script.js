const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const messages = document.getElementById("messages");

sendBtn.addEventListener("click", sendMessage);

function sendMessage() {

    const text = input.value.trim();

    if(text === "") return;

    const message = document.createElement("div");

    message.classList.add("message", "user");

    message.innerHTML = `
        <div class="avatar">👤</div>
        <div class="message-content">
            ${text}
        </div>
    `;

    messages.appendChild(message);

    input.value = "";
}