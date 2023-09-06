
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("scrollToTop").style.display = "block";
    } else {
        document.getElementById("scrollToTop").style.display = "none";
    }
}


document.getElementById("scrollToTop").onclick = function() {
    scrollToTop();
};

function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}


const parentElement = document.querySelector('.video-container');
const playButton = document.querySelector('.play-button');
const icon = document.querySelector('.fa-play'); // Select the icon element

// Function to update the button's dimensions based on the parent's width
function updateButtonSize() {
  const parentWidth = parentElement.offsetWidth;
  const buttonWidthPercentage = 15; // Adjust this as needed

  const buttonWidth = (parentWidth * buttonWidthPercentage) / 100;
  const buttonHeight = buttonWidth; // Make it square

  playButton.style.width = `${buttonWidth}px`;
  playButton.style.height = `${buttonHeight}px`;

  // Calculate the maximum allowed icon font size based on button size
  const maxIconFontSize = buttonWidth * 3.2;

  // Set the icon font size, but limit it to the maximum allowed size
  icon.style.fontSize = `${Math.min(maxIconFontSize, 300)}%`;
}

// Initial call to set the button's size and icon size
updateButtonSize();

// Add an event listener to update the button's size and icon size when the window is resized
window.addEventListener('resize', updateButtonSize);
