window.onscroll = function() {
    myFunction();
};

var topnav = document.getElementById("topnav");
var sticky = topnav.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        topnav.classList.add("sticky");
    } else {
        topnav.classList.remove("sticky");
    }
}
AOS.init();
window.addEventListener("load", AOS.refresh);
document.onreadystatechange = function() {
    if (document.readyState == "complete") {
        AOS.refresh({
            offset: 120,
            delay: 20,
            duration: 4000,
        });
    }
};