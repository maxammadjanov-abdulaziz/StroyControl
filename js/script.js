let burger = document.querySelector('.menu__burger');
let menu = document.querySelector('.header__menu');
let body = document.querySelector('body');
let menuList = document.querySelector('.menu__list');

burger.onclick = function(){
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    menuList.classList.toggle('_active');
    body.classList.toggle('_lock');
}

menuList.onclick = function () {
    menu.classList.remove('_active');
}