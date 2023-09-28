//Function for '99 Iedvesmas stasti' pages small container content display

const innerContainers = document.querySelectorAll('.inner-container');

innerContainers.forEach(container => {
  const photo = container.querySelector('.photo');
  const name = container.querySelector('.name');
  const surname = container.querySelector('.surname');
  const text = container.querySelector('.text');



  if (photo.getAttribute('src')) {
    name.style.display = 'none'; 
    surname.style.display = 'none'; 
    text.style.display = 'none'; 

    container.addEventListener('mouseover', () => {
        name.style.display = 'block';
        surname.style.display = 'block';
    });
    container.addEventListener('mouseout', () => {
        name.style.display = 'none';
        surname.style.display = 'none';
    });
  }
  else if (name.textContent.trim() !== '') {
    photo.style.display = 'none'; 
    text.style.display = 'none'; 
  }
  else if (text && text.textContent.trim() !== '') {
    photo.style.display = 'none'; 
    name.style.display = 'none'; 
    surname.style.display = 'none'; 
  }
  else {
    photo.style.display = 'none'; 
    name.style.display = 'none'; 
    surname.style.display = 'none'; 
    text.style.display = 'none'; 
  }
});


//Function for hidding containers on smaller screens
const button = document.querySelector('button');

function updateVisibility() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 991) {
        innerContainers.forEach(container => {
            container.style.display = 'block';
        });
        button.textContent = 'Skatīt mazāk';
    } else {
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

button.addEventListener('click', function () {
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

updateVisibility();

window.addEventListener('resize', updateVisibility);


// Function to open the YouTube video in a popup
function openPopup(videoId, name, surname) {
    const popupOverlay = document.getElementById('popupOverlay');
    const popupName = document.getElementById('popupName');
    const popupSurname = document.getElementById('popupSurname');
    const videoPlayer = document.getElementById('videoPlayer');

    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    popupName.textContent = name;
    popupSurname.textContent = surname;

    videoPlayer.src = videoUrl;

    popupOverlay.style.display = 'flex';
}



function closePopup() {
    const popupOverlay = document.getElementById('popupOverlay');

    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = '';
    popupOverlay.style.display = 'none';
}

innerContainers.forEach((container, index) => {
    const videoLinkElement = container.querySelector('.video-link');
    const nameElement = container.querySelector('.name');
    const surnameElement = container.querySelector('.surname');
    
    const videoLink = videoLinkElement ? videoLinkElement.innerText : '';
    const name = nameElement ? nameElement.innerText : '';
    const surname = surnameElement ? surnameElement.innerText : '';
    
    container.addEventListener('click', () => {
        const videoId = videoLinkElement ? videoLinkElement.getAttribute('data-video-id') : '';
        if (videoId) {
            openPopup(videoId, name, surname);
        }
    });
});



popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
      closePopup(); 
    }
  });