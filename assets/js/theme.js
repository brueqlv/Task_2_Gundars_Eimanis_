//Function for icon that appears when scrolling and when clicked takes to top

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
