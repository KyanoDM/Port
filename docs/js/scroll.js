var prevScrollpos = window.pageYOffset;
var nav = document.querySelector("nav");
var scrolledUp = false;

window.addEventListener("scroll", function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > prevScrollpos) {
        // Scrolling down
        nav.classList.add("hide");
        scrolledUp = false;
    } else {
        // Scrolling up
        if (!scrolledUp) {
            nav.classList.remove("hide");
            scrolledUp = true;
        }
    }
    prevScrollpos = currentScrollPos;
});
