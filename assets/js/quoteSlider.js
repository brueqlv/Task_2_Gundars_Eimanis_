const quoteContainer = document.querySelector('.quote-container-inner');
const quotes = document.querySelectorAll('.quote');
const backButton = document.querySelector('.back');
const forwardButton = document.querySelector('.forward');

let currentIndex = 0;

function showNextQuote() {
    if (currentIndex < quotes.length - 1) {
        currentIndex++;
        updateQuoteDisplay();
    }
}

function showPreviousQuote() {
    if (currentIndex > 0) {
        currentIndex--;
        updateQuoteDisplay();
    }
}

function updateQuoteDisplay() {
    const quoteWidth = quotes[0].offsetWidth;
    const translateX = -currentIndex * quoteWidth;
    quoteContainer.style.transform = `translateX(${translateX}px)`;
    backButton.disabled = currentIndex === 0;
    forwardButton.disabled = currentIndex === quotes.length - 1;
}

updateQuoteDisplay(); 