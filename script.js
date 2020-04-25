window.onscroll = function() {scrollFunction()};
let menuMobile = document.getElementById("mobile-menu");
function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 80) {
        menuMobile.style.height = "30px";
    } else {
        menuMobile.style.height = "200px";
    }
}