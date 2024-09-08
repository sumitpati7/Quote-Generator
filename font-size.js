let quote = document.getElementById("quote");
let author = document.getElementById("quoted-by");

function fontChange(operation) {
  let font_size = window.getComputedStyle(quote).getPropertyValue("font-size");
  font_size = Number(font_size.replace("px", ""));
  switch (operation) {
    case "add":
      font_size++;
      break;
    case "sub":
      font_size--;
      break;
  }
  quote.style.fontSize = font_size + "px";
}
