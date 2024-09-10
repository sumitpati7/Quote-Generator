let quote = document.getElementById("quote");
let author = document.getElementById("quoted-by");

function fontChange(operation) {
  let max_font = 55;
  let min_font = 15;
  let width = window.innerWidth;
  //set limit according to the device width.
  if (width < 500) {
    max_font = 35;
  }
  if (width > 500) {
    min_font = 25;
  }

  let font_size = window.getComputedStyle(quote).getPropertyValue("font-size");
  font_size = Number(font_size.replace("px", ""));
  if (font_size > max_font) font_size = max_font;
  if (font_size < min_font) font_size = min_font;
  if (font_size <= max_font && font_size >= min_font) {
    switch (operation) {
      case "add":
        font_size++;
        break;
      case "sub":
        font_size--;
        break;
    }
  }
  quote.style.fontSize = font_size + "px";
}
