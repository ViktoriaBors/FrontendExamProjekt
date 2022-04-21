let cardDrinks = document.querySelector('.cardMenuDrinks');
let cardSnacks = document.querySelector('.cardMenuSnacks');

cardDrinks.addEventListener('click', function () {
    cardDrinks.classList.toggle('is-flipped');
});

cardSnacks.addEventListener('click', function () {
    cardSnacks.classList.toggle('is-flipped');
});

cardDrinks.addEventListener('focus', function () {
    cardDrinks.classList.toggle('is-flipped');
});

cardSnacks.addEventListener('focus', function () {
    cardSnacks.classList.toggle('is-flipped');
});