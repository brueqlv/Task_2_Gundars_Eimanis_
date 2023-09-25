//Function for button sizing in Video container 

const parentElement = document.querySelector('.video-container');
const playButton = document.querySelector('.play-button');
const icon = document.querySelector('.fa-play'); 

function updateButtonSize() {
  const parentWidth = parentElement.offsetWidth;
  const buttonWidthPercentage = 15; 

  const buttonWidth = (parentWidth * buttonWidthPercentage) / 100;
  const buttonHeight = buttonWidth; 

  playButton.style.width = `${buttonWidth}px`;
  playButton.style.height = `${buttonHeight}px`;

  const maxIconFontSize = buttonWidth * 3.2;

  icon.style.fontSize = `${Math.min(maxIconFontSize, 300)}%`;
}

updateButtonSize();

window.addEventListener('resize', updateButtonSize);

