function sendReply() {
  const input = document.getElementById("replyInput");
  const status = document.getElementById("status");

  if (input.value.trim() === "") {
    status.innerText = "Please type a reply!";
    status.style.color = "red";
  } else {
    status.innerText = "Reply sent: " + input.value;
    status.style.color = "green";
    input.value = "";
  }
}