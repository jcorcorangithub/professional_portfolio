// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
// var navbar = document.querySelector("nav");
// var navbar = $("nav");

// Get the offset position of the navbar
var sticky = document.querySelector("nav").offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    //navbar.classList.add("sticky")
    $("nav").addClass("sticky");
  } else {
    //navbar.classList.remove("sticky");
    $("nav").removeClass("sticky");
  }
}