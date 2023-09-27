//Function for '99 Iedvesmas stasti' pages small container content display

const innerContainers = document.querySelectorAll('.inner-container');

innerContainers.forEach(container => {
  const photo = container.querySelector('.photo');
  const name = container.querySelector('.name');
  const surname = container.querySelector('.surname');
  const text = container.querySelector('.text');

  // Check if there's a photo and hide name and text
  if (photo.getAttribute('src')) {
    console.log(1);
    name.style.display = 'none'; 
    surname.style.display = 'none'; 
    text.style.display = 'none'; 
  }
  // Check if there's a name and hide photo and text
  else if (name.textContent.trim() !== '') {
    console.log(2);
    photo.style.display = 'none'; 
    text.style.display = 'none'; 
  }
  // Check if there's text and hide photo and name
  else if (text && text.textContent.trim() !== '') {
    console.log(3);
    photo.style.display = 'none'; 
    name.style.display = 'none'; 
    surname.style.display = 'none'; 
  }
  // If none of the above, hide all
  else {
    console.log(4);
    photo.style.display = 'none'; 
    name.style.display = 'none'; 
    surname.style.display = 'none'; 
    text.style.display = 'none'; 
  }
});


//Function for hidding containers on smaller screens
// Get the button and all the inner containers
const button = document.querySelector('button');

// Function to update visibility of inner containers based on screen size
function updateVisibility() {
    const screenWidth = window.innerWidth;

    // Show all inner containers on larger screens
    if (screenWidth >= 991) {
        innerContainers.forEach(container => {
            container.style.display = 'block';
        });
        button.textContent = 'Skatīt mazāk';
    } else {
        // Show only the first 20 on smaller screens
        for (let i = 0; i < innerContainers.length; i++) {
            if (i < 20) {
                innerContainers[i].style.display = 'block';
            } else {
                innerContainers[i].style.display = 'none';
            }
        }
        button.textContent = 'Skatīt vairāk';
    }
}

// Add a click event listener to the button
button.addEventListener('click', function () {
    // Toggle visibility of the remaining inner containers
    for (let i = 20; i < innerContainers.length; i++) {
        if (innerContainers[i].style.display === 'none' || innerContainers[i].style.display === '') {
            innerContainers[i].style.display = 'block';
            button.textContent = 'Skatīt mazāk';
        } else {
            innerContainers[i].style.display = 'none';
            button.textContent = 'Skatīt vairāk';
        }
    }
});

// Call the updateVisibility function when the page loads
updateVisibility();

// Listen for window resize events to update visibility
window.addEventListener('resize', updateVisibility);


// Function to open the popup
// Function to open the YouTube video in a popup
function openPopup(videoId, name, surname) {
    const popupOverlay = document.getElementById('popupOverlay');
    const popupName = document.getElementById('popupName');
    const popupSurname = document.getElementById('popupSurname');
    const videoPlayer = document.getElementById('videoPlayer');

    // Set the video URL using the video ID
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    // Set name and surname
    popupName.textContent = name;
    popupSurname.textContent = surname;

    // Set the video iframe source
    videoPlayer.src = videoUrl;

    // Display the popup
    popupOverlay.style.display = 'flex';
}



// Function to close the popup
function closePopup() {
    const popupOverlay = document.getElementById('popupOverlay');

    // Pause the video and hide the popup
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = '';
    popupOverlay.style.display = 'none';
}

// Attach click event handlers to inner-container elements
innerContainers.forEach((container, index) => {
    const videoLinkElement = container.querySelector('.video-link');
    const nameElement = container.querySelector('.name');
    const surnameElement = container.querySelector('.surname');
    
    // Check if the elements exist before accessing their innerText
    const videoLink = videoLinkElement ? videoLinkElement.innerText : '';
    const name = nameElement ? nameElement.innerText : '';
    const surname = surnameElement ? surnameElement.innerText : '';
    
    container.addEventListener('click', () => {
        // Check if there is a video ID
        const videoId = videoLinkElement ? videoLinkElement.getAttribute('data-video-id') : '';
        if (videoId) {
            openPopup(videoId, name, surname);
        }
    });
});



popupOverlay.addEventListener('click', (event) => {
    // Check if the click occurred outside of the actual popup content
    if (event.target === popupOverlay) {
      closePopup(); // Call your closePopup function
    }
  });