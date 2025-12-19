// Quotes array with explanations (no apostrophes)
const quotes = [
    { 
        text: "We are dying with every step we take and every breath we make. March to the Sea, Self Titled 2009", 
        explanation: "From birth we are already dying. Live fully while you can."
    },
    { 
        text: "Nothing kills a man faster than his own head. Trapdoor, Self Titled 2009", 
        explanation: "We are often the biggest obstacle to our own success."
    },
    { 
        text: "Please do not be afraid of what your soul is thinking. Isle of Flightless Birds, Self Titled 2009", 
        explanation: "Trust your own perspective even if it differs from others."
    },
    { 
        text: "I do not want to be heard; I want to be listened to. Forest, Regional at Best 2011", 
        explanation: "True communication happens when people genuinely listen."
    },
    { 
        text: "We all are stranger creatures than when we started as kids, culture forbids. Glowing Eyes, Regional at Best 2011", 
        explanation: "Embrace your uniqueness even if society does not understand."
    },
    { 
        text: "Are you searching for purpose? Then write something, it might be worthless. Kitchen Sink, Regional at Best 2011", 
        explanation: "Purpose is found in creating something meaningful to you."
    },
    { 
        text: "While some are doing fine, some have a really tough time getting through life so excuse us while we sing to the sky. Screen, Vessel 2013", 
        explanation: "Life can be hard for everyone, and it is okay to struggle."
    }
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
    void quoteDisplay.offsetWidth;
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
        explanationDisplay.innerHTML = "Click Tell me a quote first!";
    }
});
