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





console.log(`50 ????????????.
      
1. ?????????????? ?????????????????????? ?? ???????????? destinations (50 ????????????).
* ???? ?????????????? ???????????????? ?????? ?????????? ???? ?????????????????? ???????????????? ?????????? ?????? ???????????? ?????????????????????? ???????????????? ???? ???????????????? ????????????????
?????????????? ?????????? ???????? ?????? ???????????????? ?????? ?? ?????????????????????? - ???????????? ???????????????? ???? ???????????? ???????????? ???? ???????????? +20
*  ?????? ?????????? ?????????? ???????????????????? "?????????? ????????????",
 ???? ???????? ?????????????? ???????????? ?????????????????????????? ???????? ????????????????,
?????????????? ???????????????????? ???????????????? ?????? ???????????????????? ???????????????????????????????? ?????? ???????????? ?? ????????????. +20
*  ???????????????? ???????????????? ?????????????????????? ?????? ???????????????? +10

2. 

3.

??????????: 50 ????????????.
`);