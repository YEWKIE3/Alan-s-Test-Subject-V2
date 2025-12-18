// Scroll fade-in for sections
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


colorBtn.addEventListener('click', () => {
    // Random background color
    const randomBg = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
    document.body.style.backgroundColor = randomBg;

    // Random text color
    const randomText = `hsl(${Math.floor(Math.random() * 360)}, 50%, 20%)`;
    document.body.style.color = randomText;
});
