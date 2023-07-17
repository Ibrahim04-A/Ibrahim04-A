let body = document.querySelector("body");
let daynight = document.querySelector(".dayNight");
daynight.onclick = function () {
    body.classList.toggle("night")
}
const typed = new Typed('#text', {
    strings: ['Ibrahim'],
    loop : true,
    typeSpeed : 100,
    backSpeed : 50,
    backDelay : 1000
});