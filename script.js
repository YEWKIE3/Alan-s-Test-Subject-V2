const quotes = [
  {
    quote: "And we're dying with every step we take, we're dying with every breath we make ~March to the Sea (Self Titled, 2009)",
    explanation: "From the time we're born, we're already dying. We're not guaranteed the next step or even the next breath, so we have to live while we're dying."
  },
  {
    quote: "Nothing kills a man faster than his own head ~Trapdoor (Self Titled, 2009)",
    explanation: "We're the only ones standing in the way of everything we want."
  },
  {
    quote: "Please don't be afraid of what your soul is really thinking ~Isle of Flightless Birds (Self Titled, 2009)",
    explanation: "Don't be afraid if your thoughts or beliefs don't align with everyone else's."
  },
  {
    quote: "I don't wanna be heard; I want to be listened to ~Forest (Regional at Best, 2011)",
    explanation: "It's about wanting people to truly listen and care, not just hear words and forget them."
  },
  {
    quote: "I don't understand why everything I adore takes a different form when I squint my eyes... you find you're not who you're supposed to be ~Forest (Regional at Best, 2011)",
    explanation: "Life rarely turns out how we picture it, and realizing you're becoming someone different can be uncomfortable—but also good."
  },
  {
    quote: "We all are stranger creatures than when we all started out as kids, culture forbids ~Glowing Eyes (Regional at Best, 2011)",
    explanation: "Being different is discouraged by society, but embracing that difference is powerful."
  },
  {
    quote: "Are you searching for purpose? Then write something, yeah it might be worthless ~Kitchen Sink (Regional at Best, 2011)",
    explanation: "Purpose comes from creating something meaningful to you, regardless of others' opinions."
  }
];

const button = document.getElementById("quoteBtn");
const quoteText = document.getElementById("quoteText");
const explanationText = document.getElementById("explanationText");

button.onclick = function () {
  const random = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = "Quote: " + quotes[random].quote;
  explanationText.textContent = "Explanation: " + quotes[random].explanation;
};
