const navLinks = document.querySelectorAll('.navbar a');
let isUserScrolled = true;
var timeout;

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        isUserScrolled = false;
        navLinks.forEach(function (link) {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

window.addEventListener('scroll', function () {
    if (isUserScrolled) {
        navLinks.forEach(function (link) {
            link.classList.remove('active');
        });
    }
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        isUserScrolled = true;
    }, 1000);
});

const sr = ScrollReveal ({
    distance:'60px',
    duration:'2000',
    delay:400,
    reset:true
})

sr.reveal('.text',{delay: 200,origin: 'top'})
sr.reveal('.form-container form',{delay: 300, origin: 'left'})
sr.reveal('.heading',{delay: 300, origin: 'top'})
sr.reveal('.ride-container .box',{delay: 300, origin: 'top'})
sr.reveal('.services-container',{delay: 300, origin: 'top'})
sr.reveal('.about-container',{delay: 300, origin: 'top'})
sr.reveal('.contak-container',{delay: 300, origin: 'top'})
sr.reveal('.newsletter .box',{delay: 300, origin: 'bottom'})


function changeHeaderColor() {
    const header = document.querySelector('header');
    header.classList.toggle("bg-secondary", window.scrollY > 5);
}

document.addEventListener("DOMContentLoaded", function(){
    changeHeaderColor();
});

window.addEventListener('scroll', function(){
    changeHeaderColor();
});

const sentences = [
    "Adventure",
    "Journey",
    "Experience",
];

const typingContainer = document.querySelector("#typed");

new TypeIt("#typed", {
    strings: sentences,
    speed: 150,
    breakLines: false,
    loop: true,
    waitUntilVisible: true,
}).go();
