let toastContainer = document.getElementById("toast-container");

function copyQuote() {
  showToast();
  quote = document.getElementById("quote").innerText;
  quoted_by = document.getElementById("quoted-by").innerText;
  navigator.clipboard.writeText(quote + quoted_by);
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
