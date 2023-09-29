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
//Function for calculating widths of quote container based on quote count
function updateQuoteDisplay() {
  const quoteWidthPercentage = 100 / quotes.length; 

  quoteContainer.style.width = `${quotes.length * 100}%`; 

  quotes.forEach((quote) => {
    quote.style.flex = `0 0 ${quoteWidthPercentage}%`;
  });

  const translateX = -currentIndex * quoteWidthPercentage;
  quoteContainer.style.transform = `translateX(${translateX}%)`;
  backButton.disabled = currentIndex === 0;
  forwardButton.disabled = currentIndex === quotes.length - 1;
}

updateQuoteDisplay();
