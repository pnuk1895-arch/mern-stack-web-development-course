const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const messages = document.getElementById("messages");

// Send message when button is clicked
sendBtn.addEventListener("click", sendMessage);

// Send message when Enter key is pressed
input.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        sendMessage();
    }

});

function sendMessage() {

    const text = input.value.trim();

    // Prevent sending empty messages
    if (text === "") return;

    // Create user message
    const message = document.createElement("div");

    message.classList.add("message", "user");

    message.innerHTML = `
        <div class="avatar">👤</div>

        <div class="message-content">
            ${text}
        </div>
    `;

    // Add message to chat
    messages.appendChild(message);

    // Auto scroll to latest message
    messages.scrollTop = messages.scrollHeight;

    // Clear input field
    input.value = "";


    // Simulate AI response after 1 second
    setTimeout(() => {

        addAIMessage("I received your message!");

    }, 1000);
}

function addAIMessage(text) {

    const message = document.createElement("div");

    message.classList.add("message", "ai");

    message.innerHTML = `
        <div class="avatar">🤖</div>

        <div class="message-content">
            ${text}
        </div>
    `;

    // Add AI message to chat
    messages.appendChild(message);

    // Auto scroll
    messages.scrollTop = messages.scrollHeight;
}