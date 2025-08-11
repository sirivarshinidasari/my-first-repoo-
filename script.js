const quotes = [
    "Believe you can and you're halfway there.",
    "Every moment is a fresh beginning.",
    "Don't watch the clock; do what it does. Keep going.",
    "Happiness is not by chance, but by choice.",
    "Dream big and dare to fail.",
    "Your limitation—it's only your imagination."
];

const colors = ["#FFB6C1", "#ADD8E6", "#98FB98", "#FFD700", "#FFA07A", "#E6E6FA"];

document.getElementById("generateBtn").addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.getElementById("quoteBox").textContent = randomQuote;
    document.body.style.backgroundColor = randomColor;
});
