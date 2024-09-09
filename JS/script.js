const quotes = [
  {
    quote: "Time and tide wait for no man.",
    author: "Geoffrey Chaucer",
    category: "time",
  },
  {
    quote: "The two most powerful warriors are patience and time.",
    author: "Leo Tolstoy",
    category: "time",
  },
  {
    quote: "Time flies over us, but leaves its shadow behind.",
    author: "Nathaniel Hawthorne",
    category: "time",
  },
  {
    quote: `Time is a created thing. To say 'I don't have time' is like saying, 'I don't want to.`,
    author: "Lao Tzu",
    category: "time",
  },
  {
    quote: "Time is the most valuable thing a man can spend.",
    author: "Theophrastus",
    category: "time",
  },
  {
    quote: "Time is a great healer, but a poor beautician.",
    author: "Lucille S. Harper",
    category: "time",
  },
  {
    quote: "Time is what we want most but what we use worst.",
    author: "William Penn",
    category: "time",
  },
  {
    quote: "Lost time is never found again.",
    author: "Benjamin Franklin",
    category: "time",
  },
  {
    quote: "The only time we have is the present moment.",
    author: "Thich Nhat Hanh",
    category: "time",
  },
  {
    quote:
      "Time changes everything except something within us which is always surprised by change.",
    author: "Thomas Hardy",
    category: "time",
  },
  {
    quote:
      "Mathematics is the language with which God has written the universe.",
    author: "Galileo Galilei",
    category: "maths",
  },
  {
    quote: "Pure mathematics is, in its way, the poetry of logical ideas.",
    author: "Albert Einstein",
    category: "maths",
  },
  {
    quote: "Mathematics is the queen of the sciences.",
    author: "Carl Friedrich Gauss",
    category: "maths",
  },
  {
    quote: "The book of nature is written in the language of mathematics.",
    author: "Galileo Galilei",
    category: "maths",
  },
  {
    quote:
      "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.",
    author: "William Pual Thurston",
    category: "maths",
  },
  {
    quote:
      "Mathematics is the most beautiful and most powerful creation of the human spirit.",
    author: "Stefen Banach",
    category: "maths",
  },
  {
    quote:
      "Mathematics is the art of giving the same name to different things.",
    author: "Henri Pincaré",
    category: "maths",
  },
  {
    quote: "Mathematics is the music of reason.",
    author: "James Joseph Sylvester",
    category: "maths",
  },
  {
    quote:
      "The essence of mathematics is not to make simple things complicated, but to make complicated things simple.",
    author: "S. Gudder",
    category: "maths",
  },
  {
    quote: "The important thing is to never stop questioning.",
    author: "Albert Einstein",
    category: "science",
  },
  {
    quote:
      "Science is not only compatible with spirituality; it is a profound source of spirituality.",
    author: "Carl Sagan",
    category: "science",
  },
  {
    quote:
      "Science is a way of thinking much more than it is a body of knowledge.",
    author: "Carl Sagan",
    category: "science",
  },
  {
    quote:
      "The whole of science is nothing more than a refinement of everyday thinking.",
    author: "Albert Einstein",
    category: "science",
  },
  {
    quote: "In science, there are no shortcuts to truth.",
    author: "Karl Popper",
    category: "science",
  },
  {
    quote:
      "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
    author: "Stephen Hawking",
    category: "science",
  },
  {
    quote: "Science is the poetry of reality.",
    author: "Richard Dawkins",
    category: "science",
  },
  {
    quote: "What we know is a drop, what we don’t know is an ocean.",
    author: "Sir Issac Newton",
    category: "science",
  },
  {
    quote:
      "Science is the best tool ever devised for understanding how the world works.",
    author: "Micheal Shermer",
    category: "science",
  },
  {
    quote:
      "To invent is to discern the way things are from the way they might be.",
    author: "Robert H. Goddard",
    category: "science",
  },
  {
    quote:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author: "Albert Einstein",
    category: "science",
  },
  {
    quote: "You get what you give.",
    author: `The Lucky One (2012)`,
    category: "movies",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: `The Best Exotic Marigold Hotel (2011)`,
    category: "movies",
  },
  {
    quote:
      "The world is full of magical things patiently waiting for our wits to grow sharper.",
    author: `The Secret Life of Walter Mitty (2012)`,
    category: "movies",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: `The Miracle Season (2018)`,
    category: "movies",
  },
  {
    quote: "Sometimes the things we can't change end up changing us.",
    author: `The Adjustment Bureau (2011)`,
    category: "movies",
  },
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today",
    author: `The Pursuit of Happyness (2006) (often attributed to Franklin D. Roosevelt)`,
    category: "movies",
  },
  {
    quote:
      "Do not follow where the path may lead. Go instead where there is no path and leave a trail.",
    author: `Into the Wild (2007)`,
    category: "movies",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: `The Breakfast Club (1985)`,
    category: "movies",
  },
  {
    quote: "What we do in life echoes in eternity.",
    author: `Gladiator (2000)`,
    category: "movies",
  },
  {
    quote:
      "It is not our abilities that show what we truly are… it is our choices.",
    author: `Harry Potter and the Chamber of Secrets (2002)`,
    category: "movies",
  },
];

let quote_text = document.getElementById("quote");
let quoted_by_text = document.getElementById("quoted-by");
let toggle_switch = document.getElementById("toggle-switch");
let selected_quote_list = quotes.filter((d) => d.category === "science");
let selected_category = "science"; //initially science is selected
let quoteNumber = 0;

function categoryChange(element) {
  quoteNumber = 0;
  selected_quote_list = quotes.filter((d) => d.category === element.value);
  displayQuote();
}

function reset() {
  quote_text.innerHTML = "";
  quoted_by_text.innerHTML = "";
  i = 0;
}

function previousQuote() {
  if (quoteNumber <= 0) {
    quoteNumber = 0;
    return;
  }
  quoteNumber--;
  displayQuote();
}

function nextQuote() {
  if (quoteNumber >= selected_quote_list.length) {
    quoteNumber = selected_quote_list.length;
    return;
  }
  quoteNumber++;
  displayQuote();
}

function generateRandomQuote() {
  reset();
  let random_number = generateRandomNumber();
  if (quoteNumber !== random_number) {
    quoteNumber = random_number;
    displayQuote();
    return;
  } else {
    generateRandomQuote();
  }
}

function generateRandomNumber() {
  return Math.floor(Math.random() * selected_quote_list.length);
}

let i = 0;

function typeQuote() {
  let text = selected_quote_list[quoteNumber].quote;
  if (i < text.length) {
    quote_text.innerHTML += text[i++];
    setTimeout(typeQuote, 50);
  } else {
    quoted_by_text.innerText = `--` + selected_quote_list[quoteNumber].author;
  }
  return;
}

function displayQuote() {
  reset();
  typeQuote();
}

toggle_switch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

displayQuote();
