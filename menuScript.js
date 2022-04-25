let cardDrinks = document.querySelector('.cardMenuDrinks');
let cardSnacks = document.querySelector('.cardMenuSnacks');

//using click and keyup to make sure that menu can be reached with keyboard too

cardSnacks.addEventListener('click', function () {
    cardSnacks.classList.toggle('is-flipped');
});
cardSnacks.addEventListener('keyup', function () {
    cardSnacks.classList.toggle('is-flipped');
});

cardDrinks.addEventListener('click', function () {
    cardDrinks.classList.toggle('is-flipped');
});

cardDrinks.addEventListener('keyup', function () {
    cardDrinks.classList.toggle('is-flipped');
});