if (localStorage.getItem("clicked") != "yes") {
    let container = document.querySelector("#modalCookies");
    container.style.display = "flex";
}

let buttonCookies = document.querySelector("#buttonCookies");
buttonCookies.addEventListener("click", function () {
    let container = document.querySelector("#modalCookies");
    container.style.display = "none";
    localStorage.setItem("clicked", "yes")
});

