// burger-menu
const burgerIcon = document.querySelector('.hamburger');
const links = document.querySelector('.navig');
const n = document.querySelector('.plan');
// const k = document.querySelector('.destinations');

function toggleMenu() {
  burger.classList.toggle('is-active');
 navig.classList.toggle('open');
}

function hideMenu() {
 navig.classList.remove('open');
 burger.classList.remove('is-active');
}

burgerIcon.addEventListener('click', toggleMenu);
links.addEventListener('click', hideMenu);
n.addEventListener('click', hideMenu);
// k.addEventListener('click', hideMenu);


// slider
let left = document.querySelector("#slide-left");
let active = document.querySelector("#slide-active");
let right = document.querySelector("#slide-right");
const CAROUSEL = document.querySelector("#carousel")

function moveLeft() {
  console.log(1, CAROUSEL.classList)
  CAROUSEL.classList.add("transition-left")
  console.log(2, CAROUSEL.classList)
}
function moveRight() {
  console.log(1, CAROUSEL.classList)
  CAROUSEL.classList.add("transition-right")
  console.log(2, CAROUSEL.classList)
}

left.addEventListener("click", moveLeft);
right.addEventListener("click", moveRight);




console.log(`76 баллов.
      
1. Вёрстка соответствует макету. Ширина экрана 390px (39 баллов).
* Блок header 
* Секция preview 
* Секция steps 
* Секция destinations 
* Секция stories - с макетом расходятся изображения
* Блок footer 

2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная
 полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется (15 баллов).

3. На ширине экрана 390рх и меньше реализовано адаптивное меню (22 балла).
при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка 
* при нажатии на бургер-иконку плавно появляется адаптивное меню 
* адаптивное меню соответствует макету 
* при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран 
* ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям (все, кроме Account, она пока просто закрывает меню) 
* при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна.

Итого: 76 баллов.
`);