var isYouRemarkDisplayed = false;

function sendMessage() {
  var message = document.getElementById("messageInput").value;
  if (message.trim() !== "") {
    var currentTime = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
    var chatArea = document.getElementById("chatArea");
    var messageContainer = document.createElement("div");
    messageContainer.className = "message-container";
    var messageElement = document.createElement("div");
    messageElement.className = "message sent";
    messageElement.innerHTML = "<div class='message-content'>" + message + "</div>";
    messageContainer.appendChild(messageElement);
    chatArea.appendChild(messageContainer);
    document.getElementById("messageInput").value = "";

    if (!isYouRemarkDisplayed) {
      var youRemarkElement = document.createElement("div");
      youRemarkElement.className = "message sent you-remark";
      youRemarkElement.innerHTML = "<div class='message-content'><span class='you'>You</span><span class='time'>" + currentTime + "</span></div>";
      chatArea.insertBefore(youRemarkElement, messageContainer);
      isYouRemarkDisplayed = true;
    }
  }
}

function handleKeyDown(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function closeChatBox() {
  var chatBox = document.getElementsByClassName("chat-box")[0];
  chatBox.style.display = "none";
}
