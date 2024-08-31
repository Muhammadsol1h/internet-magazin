let resposive = document.querySelector("#responsive-menu");
let hamburger_menu = document.querySelector("#hamburger-menu");
let close_menu = document.querySelector("#close__menu");
let body = document.querySelector('body')

hamburger_menu.addEventListener("click", function () {
  body.classList.add('overflow-hidden')
  resposive.classList.add("right-0");
  resposive.classList.remove("-right-full");
});
close_menu.addEventListener("click", function () {
  resposive.classList.add("-right-full");
  resposive.classList.remove("right-0");
  body.classList.remove('overflow-hidden')

});






var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".button-next1",
        prevEl: ".button-prev1",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,

    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        613: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});