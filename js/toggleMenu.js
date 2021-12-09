//elements
const header = document.querySelector('header');
const burgerButton = document.querySelector('.burgerButton');

//events
burgerButton.addEventListener('click', handleClickBurgerButton);

function handleClickBurgerButton() {
  burgerButton.classList.toggle('openButton');
  header.classList.toggle('openMenu')
}