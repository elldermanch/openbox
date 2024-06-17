// Assign the Elements
const countLabel = document.getElementById("countLabel");
const resetBtn = document.getElementById("resetBtn");
const countButton = document.getElementById("countButton");
const boxClose = document.getElementById("box-close");
const boxOpen = document.getElementById("box-open");

let count;

countButton.addEventListener("click", () => {
    countLabel.style.display = "block";
    countButton.style.display = "none";
    boxOpen.style.display = "block";
    boxClose.style.display = "none";

    countLabel.style.animationPlayState = "running";

    count = Math.floor(Math.random() * 8) + 1;
    countLabel.innerHTML = count;
});

resetBtn.addEventListener("click", () => {
    countLabel.style.display = "none";
    countButton.style.display = "block";

    boxOpen.style.display = "none";
    boxClose.style.display = "block";

});