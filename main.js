var upB = document.querySelector("p .fa-chevron-up");
var downB = document.querySelector("p .fa-chevron-down");
var main = document.querySelector(".main");
upB.onclick = function () {
    moveup();
}
downB.onclick = function () {
    movedown();
}
main.onwheel = function (event) {
    if (event.deltaY < 0) {
        moveup();
    } else {
        movedown();
    }
}
document.addEventListener("keydown", function (event) {
    if (event.keyCode == 38) {
        moveup();
    } else if (event.keyCode == 40) {
        movedown();
    }
});
function getElementIndex(element) {
    for (var i = 0; element = element.previousElementSibling; i++);
    return i;
}
function moveup() {
    var current = document.querySelector(".current");
    var lower = document.querySelector(".lower");
    var upper = document.querySelector(".upper");
    var lower2 = document.querySelector(".lower2");
    var upper2 = document.querySelector(".upper2");
    if (getElementIndex(upper2) == 0) {
        up(lower, upper, current, upper2, lower2);
        document.querySelector(".main").lastElementChild.classList.add("upper2");
    } else {
        up(lower, upper, current, upper2, lower2);
        upper2.previousElementSibling.classList.add("upper2");
    }
}
function movedown() {
    var current = document.querySelector(".current");
    var lower = document.querySelector(".lower");
    var upper = document.querySelector(".upper");
    var lower2 = document.querySelector(".lower2");
    var upper2 = document.querySelector(".upper2");
    if (getElementIndex(lower2) == (document.querySelector(".main").children.length - 1)) {
        down(lower, upper, current, upper2, lower2);
        document.querySelector(".main").firstElementChild.classList.add("lower2");
    } else {
        down(lower, upper, current, upper2, lower2);
        lower2.nextElementSibling.classList.add("lower2");
    }
}
function up(lower, upper, current, upper2, lower2) {
    lower2.classList.remove("lower2");
    lower.classList.remove("lower");
    lower.classList.add("lower2");
    current.classList.remove("current");
    current.classList.add("lower");
    upper.classList.remove("upper");
    upper.classList.add("current");
    upper2.classList.remove("upper2");
    upper2.classList.add("upper");
}
function down(lower, upper, current, upper2, lower2) {
    upper2.classList.remove("upper2");
    upper.classList.remove("upper");
    upper.classList.add("upper2");
    current.classList.remove("current");
    current.classList.add("upper");
    lower.classList.remove("lower");
    lower.classList.add("current");
    lower2.classList.remove("lower2");
    lower2.classList.add("lower");
}
