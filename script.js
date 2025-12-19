// Array to hold quote objects
const quotes = [
  {
    quote: "This is a test quote.",
    explanation: "This is a test explanation to make sure the button works."
  },
  {
    quote: "Nothing kills a man faster than his own head ~Trapdoor (Self Titled, 2009)",
    explanation: "We're the only ones standing in the way of everything we want."
  }
];


// Get references to HTML elements
const button = document.getElementById("quoteBtn");
const quoteText = document.getElementById("quoteText");
const explanationText = document.getElementById("explanationText");

// Button click event to show a random quote
button.onclick = function() {
  if (quotes.length === 0) {
    quoteText.textContent = "No quotes added yet.";
    explanationText.textContent = "";
    return;
  }

  const random = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = "Quote: " + quotes[random].quote;
  explanationText.textContent = "Explanation: " + quotes[random].explanation;
};
