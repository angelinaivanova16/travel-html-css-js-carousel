// burger-menu
const burgerIcon = document.querySelector('.hamburger');
const links = document.querySelector('.navig');
const n = document.querySelector('.plan');

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




// slider
let left = document.querySelector("#slide-left");
let active = document.querySelector("#slide-active");
let right = document.querySelector("#slide-right");
const CAROUSEL = document.querySelector("#carousel")

let ellipse1 = document.querySelector("#ell1");
let ellipse2 = document.querySelector("#ell2");
let ellipse3 = document.querySelector("#ell3");


function moveLeft() {
  CAROUSEL.classList.add("transition-left");
  active.classList.add("r");
  ellipse1.classList.add("ellipse-main");
  ellipse2.classList.remove("ellipse-main");
  ellipse2.classList.add("ellipse");
}
function moveRight() {
  CAROUSEL.classList.add("transition-right");
  active.classList.add("l");
  ellipse3.classList.add("ellipse-main");
  ellipse2.classList.remove("ellipse-main");
  ellipse2.classList.add("ellipse");
}
function moveVarious() {
  if (active.classList.contains('l')) {
    CAROUSEL.classList.remove("transition-right");
    CAROUSEL.classList.remove("transition-left");
    CAROUSEL.classList.add("slide2");
    ellipse2.classList.add("ellipse-main");
    ellipse3.classList.remove("ellipse-main");
    ellipse3.classList.add("ellipse");
    ellipse1.classList.remove("ellipse-main");
  } else {
    CAROUSEL.classList.remove("transition-left");
    CAROUSEL.classList.add("slide2");
    ellipse2.classList.add("ellipse-main");
    ellipse1.classList.remove("ellipse-main");
    ellipse1.classList.add("ellipse");
  }
}

left.addEventListener("click", moveLeft);
right.addEventListener("click", moveRight);
active.addEventListener("click", moveVarious);





console.log(`50 баллов.
      
1. Слайдер изображений в секции destinations (50 баллов).
* На десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели
Слайдер может быть как конечным так и бесконечным - данный критерий не должен влиять на оценку +20
*  Три точки внизу отображают "номер слайда",
 то есть каждому слайду соответствует свой кружочек,
который становится активным при нахождении соответствующего ему слайда в центре. +20
*  Анимации плавного перемещения для слайдера +10

2. 

3.

Итого: 50 баллов.
`);