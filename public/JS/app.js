let resposive = document.querySelector("#responsive-menu");
let hamburger_menu = document.querySelector("#hamburger-menu");
let close_menu = document.querySelector("#close__menu");
let body = document.querySelector('body')

hamburger_menu.addEventListener('click', function () {
    body.classList.add('overflow-hidden')
    resposive.classList.remove("-left-full");
    resposive.classList.add("right-0");
})
close_menu.addEventListener("click", function () {
    resposive.classList.add("-left-full");
    resposive.classList.remove("right-0");
    body.classList.remove('overflow-hidden')

});


let megaImg = document.querySelector("#mega-img")
let childImg = document.querySelector("#child-img")
let childImg1 = document.querySelector("#child-img1")
let childImg2 = document.querySelector("#child-img2")

childImg.addEventListener('click', function () {
    megaImg.src = childImg.src
})
childImg1.addEventListener('click', function () {
    megaImg.src = childImg1.src
})
childImg2.addEventListener('click', function () {
    megaImg.src = childImg2.src
})

let divbtn = document.querySelectorAll("#divbtn")

divbtn.forEach(div => {
    div.addEventListener('click' , () =>{
        document.querySelector('.active')?.classList.remove('active');
        div.classList.add('active')
    })
})

let linkactive = document.querySelectorAll("#linkactive")

linkactive.forEach(link =>{
    link.addEventListener('click' , () =>{
        document.querySelector('.linkactive')?.classList.remove('linkactive');
        link.classList.add('linkactive')
    })
})







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