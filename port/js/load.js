// Get the elements you want to reveal
var element1 = document.getElementById('element1');
var element2 = document.getElementById('element2');
var element3 = document.getElementById('element3');

// Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function revealOnScroll() {
  if (isElementInViewport(element1)) {
    element1.classList.add('visible');
  }
  if (isElementInViewport(element2)) {
    element2.classList.add('visible');
  }
  if (isElementInViewport(element3)) {
    element3.classList.add('visible');
  }
}

// Attach the scroll event listener to the window
window.addEventListener('scroll', revealOnScroll);
