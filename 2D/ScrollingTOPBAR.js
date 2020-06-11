// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var topbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = topbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    topbar.classList.add("sticky")
  } else {
    topbar.classList.remove("sticky");
  }
} 