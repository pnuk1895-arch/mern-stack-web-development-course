const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const messages = document.getElementById("messages");
const welcomeScreen = document.getElementById("welcome-screen");
// Send message when button is clicked
sendBtn.addEventListener("click", sendMessage);

// Send message when Enter key is pressed
input.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        sendMessage();
    }

});

function sendMessage() {

    // Get text and remove extra spaces
    const text = input.value.trim();

    // Prevent empty messages
    if (text === "") return;

    // Add user message
    addMessage(text, "user");

    // Clear input field
    input.value = "";

    // Put cursor back in input
    input.focus();

    // Simulate AI response
    setTimeout(() => {

        addMessage(`You said: ${text}`, "ai");

    }, 1000);
}

function addMessage(text, role) {

    // Create message container
    const message = document.createElement("div");

    // Add classes
    message.classList.add("message", role);

    // Select avatar
    const avatar = role === "user" ? "👤" : "🤖";

    // Add HTML
    message.innerHTML = `
        <div class="avatar">
            ${avatar}
        </div>

        <div class="message-content">
            ${text}
        </div>
    `;

    welcomeScreen.style.display = "none";
    // Append message to chat
    messages.appendChild(message);

    // Auto scroll to latest message
    messages.scrollTop = messages.scrollHeight;
}