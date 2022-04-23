let resetButton = document.getElementById("reset")
resetButton.addEventListener("click", function () {
    document.getElementById("eventForm").reset();
})
let submitButton = document.getElementById("submit")
submitButton.addEventListener("click", function () {
    alert("Thank you for your submission. Now you are going to be redirected to ProOktatas homepage.")
})

let rainbowAllCircle = document.querySelectorAll(".rainbowGame div");
for (rainbowOneCircle of rainbowAllCircle) {
    rainbowOneCircle.addEventListener("click", function () {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    });
}
