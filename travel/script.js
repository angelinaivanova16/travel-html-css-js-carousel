// burger-menu
const burgerIcon = document.querySelector('.hamburger');
const links = document.querySelector('.navig');
const n = document.querySelector('.plan');
const k = document.querySelector('.destinations');
const d = document.querySelector('.howitworks');


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
k.addEventListener('click', hideMenu);
d.addEventListener('click', hideMenu);




console.log(`110 баллов.
      
1. Вёрстка валидная +10
для проверки валидности вёрстки используйте сервис https://validator.w3.org/
2. Вёрстка семантическая +20
В коде странице присутствуют следующие элементы (указано минимальное количество, может быть больше):
* <header>, <main>, <footer> +3
* четыре элемента <section> (по количеству секций) +3
* только один заголовок <h1> +3
* три заголовка <h2> (количество секций минус одна, у которой заголовок <h1>) +3
* один элемент <nav> (панель навигации) +3
* два списка ul > li > a (панель навигации, ссылки на соцсети) +3
* четыре кнопки <button> +2
3. Вёрстка соответствует макету +48
* блок <header> +6
* секция preview +9
* секция steps +9
* секция destinations +9
* секция stories +9
* блок <footer> +6
4. Требования к css + 12
* для построения сетки используются флексы или гриды +2
* при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2
* фоновый цвет тянется на всю ширину страницы +2
* иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2
* изображения добавлены в формате .jpg +2
* есть favicon +2
5. Интерактивность, реализуемая через css +20
* плавная прокрутка по якорям +5
* иконки соцсетей в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса (допускается добавление своих вариантов иконок github или RSSchool) https://rs.school/js-stage0/ +5
* интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5
* обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5
110/110`
      );