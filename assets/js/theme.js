//Function for icon that appears when scrolling and when clicked takes to top

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("scrollToTop").style.display = "block";
    } else {
        document.getElementById("scrollToTop").style.display = "none";
    }
}

document.getElementById("scrollToTop").onclick = function () {
    scrollToTop();
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// For pop-up menu
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const headerNavbarPopup = document.querySelector(".header-navbar-popup");

menuIcon.addEventListener("click", function () {
    headerNavbarPopup.style.display = "flex";

    menuIcon.style.display = "none";
    closeIcon.style.display = "flex";
});

closeIcon.addEventListener("click", function () {
    headerNavbarPopup.style.display = "none";

    closeIcon.style.display = "none";
    menuIcon.style.display = "flex";
});

