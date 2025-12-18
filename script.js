// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Scroll fade-in
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + window.innerHeight * 0.8;
        sections.forEach(section => {
            if (scrollPos > section.offsetTop) {
                section.classList.add('visible');
            }
        });
    });

    // Buttons
    const colorBtn = document.getElementById('colorBtn');
    const textBtn = document.getElementById('textBtn');
    const alertBtn = document.getElementById('alertBtn');
    const quoteBtn = document.getElementById('quoteBtn');
    const counterBtn = document.getElementById('counterBtn');

    // Background color
    colorBtn.addEventListener('click', () => {
        const randomBg = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
        document.body.style.backgroundColor = randomBg;
    });

    // Text color
    textBtn.addEventListener('click', () => {
        const randomText = `hsl(${Math.floor(Math.random() * 360)}, 50%, 20%)`;
        document.body.style.color = randomText;
    });

    // Alert
    alertBtn.addEventListener('click', () => {
        alert("Surprise! 🎉");
    });

    // Random quotes
    const quotes = [
        "Keep coding, keep learning!",
        "Experiment. Fail. Try again.",
        "Creativity is intelligence having fun.",
        "Web design is your playground."
    ];
    quoteBtn.addEventListener('click', () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        alert(randomQuote);
    });

    // Click counter
    let count = 0;
    counterBtn.addEventListener('click', () => {
        count++;
        counterBtn.textContent = `Click Me! (${count})`;
    });

});
