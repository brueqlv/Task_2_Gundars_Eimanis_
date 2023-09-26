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


// Get the menu and close icons by their IDs
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const headerNavbarPopup = document.querySelector(".header-navbar-popup");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", function () {
    // Toggle the visibility of the popup menu
    headerNavbarPopup.style.display = "flex";

    // Hide the menu icon and show the close icon
    menuIcon.style.display = "none";
    closeIcon.style.display = "flex";
});

// Add a click event listener to the close icon
closeIcon.addEventListener("click", function () {
    // Toggle the visibility of the popup menu
    headerNavbarPopup.style.display = "none";

    // Hide the close icon and show the menu icon
    closeIcon.style.display = "none";
    menuIcon.style.display = "flex";
});

