let cardDrinks = document.querySelector('.cardMenuDrinks');
let cardSnacks = document.querySelector('.cardMenuSnacks');

//using focus instead of click - make sure that can be rached with keyboard
cardDrinks.addEventListener('focus', function () {
    cardDrinks.classList.toggle('is-flipped');
});

cardSnacks.addEventListener('focus', function () {
    cardSnacks.classList.toggle('is-flipped');
});