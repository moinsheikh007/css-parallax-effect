const text = document.getElementById('text');
const leftTree = document.getElementById('leftTree');
const rightTree = document.getElementById('rightTree');
const leftGate = document.getElementById('leftGate');
const rightGate = document.getElementById('rightGate');

window.addEventListener('scroll',() => {
    const value = window.scrollY;
    text.style.marginTop = value * 2.5 +"px";
    leftTree.style.left = value * -1.5 +"px";
    rightTree.style.left = value * 1.5 +"px";
    leftGate.style.left = value * .5 +"px";
    leftGate.style.left = value * .5 +"px";
    rightGate.style.left = value * -.5 +"px";
})