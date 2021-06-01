const hearts = document.querySelector(".far");
const filter = document.querySelector(".filter");
const menuButton = document.querySelector(".menu");
const filterStyles = window.getComputedStyle(filter);

menuButton.addEventListener("click", () => {
    if (filterStyles.getPropertyValue("clip-path") === "circle(0% at 100% 0%)") {
        filter.style.clipPath = "circle(100% at 50% 50%)";
    } else {
        filter.style.clipPath = "circle(0% at 100% 0%)";
    }
});

document.addEventListener("mouseup", (event) => {
    if (filterStyles.getPropertyValue('clip-path') === 'circle(100% at 50% 50%)') {
        if(!filter.contains(event.target)) {
            filter.style.clipPath = 'circle(0% at 100% 0%';
        }
    }
});

function changeHeart(x) {
    x.classList.toggle("fas");
    x.classList.toggle("far");
};