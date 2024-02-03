const firstImage = document.getElementById('first');
const lastImage = document.getElementById('last');
const text = document.getElementById('text');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    firstImage.style.top = value * 0.7 +"px";
    lastImage.style.bottom = value * 0.5 +"px";
    text.style.top = value * 1 +"px";
})