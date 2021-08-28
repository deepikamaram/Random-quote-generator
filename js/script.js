/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote:
      "Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.",
    source: "Arnold Schwarzenegger",
    citation: "Gold Coast",
    tag: "fitness",
  },

  {
    quote: "Failure is not an option. Everyone has to succeed.",
    source: "Arnold Schwarzenegger",
    citation: "",
    tag: "fitness",
  },

  {
    quote:
      "Be humble, Be hungry. And always be the hardest worker in the room.",
    source: "Dwayne 'The Rock' Johnson",
    citation: "Everyday Power",
    year: "2014",
    tag: "life",
  },

  {
    quote: "I like to use the hard times in the past to motivate me today.",
    source: "Dwayne Johnson",
    citation: "Attitude Quotes",
    tag: "motivation",
  },

  {
    quote:
      "Everything negative - pressure, challenges - are all an opportunity for me to rise.",
    source: "Kobe Bryant",
    tag: "self-motivation",
  },
];

/***
 * `randomNumber` function
 ***/
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
  let randomNum = getRandomNumber(quotes.length);
  return quotes[randomNum];
}

/***
 * `getRandomColor` function
 ***/

function getRandomColor() {
  let randomColor = "#" + Math.floor(getRandomNumber(16777215)).toString(16);
  //generates a random color -> #56eec7
  return randomColor;
}

/***
 * `printQuote` function
 ***/

function printQuote() {
  let ranQuote = getRandomQuote();

  let html = `<p class="main-quote">${ranQuote.quote}</p>`;
  html += `<p class= "main-source"> - ${ranQuote.source}`;

  if (ranQuote.hasOwnProperty("citation")) {
    html += `<span class="main-citation">, ${ranQuote.citation}</span>`;
  }
  if (ranQuote.hasOwnProperty("year")) {
    html += `<span class="main-year">, ${ranQuote.year}</span>`;
  }

  html += `<span class="main-tag">, #${ranQuote.tag}</span></p>`;
  document.querySelector("main").innerHTML = html;
  let color = getRandomColor();
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector(".btn-1").style.color = color;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

/***
 * Timing Function
 ***/

setInterval(function () {
  printQuote();
}, 10000);
