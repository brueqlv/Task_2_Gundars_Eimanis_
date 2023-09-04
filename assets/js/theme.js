
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
