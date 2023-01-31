const hamburger = document.querySelector(".menu-hamburger");
const navMenu = document.querySelector(".navbar");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".navbar-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

$('.slide-left').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button class="prev-arrow"><i class="prev-icon"></i></button>',
    nextArrow: '<button class="next-arrow"><i class="next-icon"></i></button>'
});

$('.gallery').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerPadding: '60px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                centerPadding: '60px',
                slidesToShow: 1
            }
        },
    ]
});