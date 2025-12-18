// Array of quotes with their explanations
const quotes = [
    { 
        text: "I’m facing what scares me and asking for truth without hiding.", 
        explanation: "Confront your fears honestly instead of avoiding them."
    },
    { 
        text: "I don’t want to lose myself to the world — I want to stay awake to who I am.", 
        explanation: "Stay true to yourself despite external pressures."
    },
    { 
        text: "I’ve walked through the deserts of my mind searching for meaning.", 
        explanation: "Exploring your thoughts deeply to find purpose."
    },
    { 
        text: "Friend, please don’t take your life away from me.", 
        explanation: "A reminder to care for friends and support them."
    }
    // Add more quotes here
];

let currentQuoteIndex = null;

// DOM elements
const quoteBtn = document.getElementById("quoteBtn");
const explanationBtn = document.getElementById("explanationBtn");
const quoteDisplay = document.getElementById("quoteDisplay");
const explanationDisplay = document.getElementById("explanationDisplay");

// Show a random quote
quoteBtn.addEventListener('click', () => {
    currentQuoteIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.innerHTML = quotes[currentQuoteIndex].text;
    quoteDisplay.classList.remove("fade");
    void quoteDisplay.offsetWidth; // trigger reflow for animation
    quoteDisplay.classList.add("fade");

    // Clear previous explanation
    explanationDisplay.innerHTML = "";
});

// Show explanation of the current quote
explanationBtn.addEventListener('click', () => {
    if(currentQuoteIndex !== null) {
        explanationDisplay.innerHTML = quotes[currentQuoteIndex].explanation;
        explanationDisplay.classList.remove("fade");
        void explanationDisplay.offsetWidth;
        explanationDisplay.classList.add("fade");
    } else {
        explanationDisplay.innerHTML = "Click 'Tell me a quote' first!";
    }
});
