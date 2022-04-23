let textOnBook = document.querySelectorAll(".textHidden");
let prevBook

//select textHidden paragraph in an array
//if the hidden text has already  has a display remove it. Otherwise take the other book if it has a class then remove it otherwise added
// using focus instead of click - make sure to use for keyboard and mouse
for (let i = 0; i < textOnBook.length; i++) {
    textOnBook[i].addEventListener("focus", function () {
        if (this.classList.contains("display")) {
            this.classList.remove("display")
        }
        else {
            if (prevBook != null)
                prevBook.classList.remove("display");
            prevBook = this;
            this.classList.add("display");
        }
    })
}




let pageOne = document.querySelector(".customGridOne")
let pageTwo = document.querySelector(".customGridTwo")
let buttonForPageOne = document.querySelector("#pageOne")
let buttonForPageTwo = document.querySelector("#pageTwo")

// select the two grid and the buttons

buttonForPageOne.addEventListener("click", function () {
    if (pageOne.classList.contains("hidePage") && pageTwo.classList.contains("showPage")) {
        pageOne.classList.remove("hidePage")
        pageOne.classList.add("showPage")
        pageTwo.classList.remove("showPage")
        pageTwo.classList.add("hidePage")
    }
    console.log("button1")
});

// Clicking on page One button - if the page one grid has hide class AND page two grid has show, page one remove hide and add shpw, plus page two remove show and add hide

buttonForPageTwo.addEventListener("click", function () {
    if (pageTwo.classList.contains("hidePage") && pageOne.classList.contains("showPage")) {
        pageTwo.classList.remove("hidePage")
        pageTwo.classList.add("showPage")
        pageOne.classList.remove("showPage")
        pageOne.classList.add("hidePage")
    }
    else {
        pageTwo.classList.add("showPage")
        pageOne.classList.add("hidePage")
    }
    console.log("button2")
});

//clicking on page two button - if page two has hide and pageone has show - remove hide from page two and add show plus remove show from page one and add show instead. OOOORRRR - so pagetwo and page one dont have any classes - add show class to page two and hide to page on