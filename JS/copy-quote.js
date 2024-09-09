let toastContainer = document.getElementById("toast-container");

function copyQuote() {
  quote = document.getElementById("quote").innerText;
  quoted_by = document.getElementById("quoted-by").innerText;
  const textArea = document.createElement("textarea");
  textArea.value = quote + quoted_by;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
  document.body.removeChild(textArea);
  showToast();
}

function showToast() {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = `Quote Copied Successfully!`;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
