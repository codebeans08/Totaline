$(document).ready(function () {
    // header toggle menu js
    $(".mega-menu-area").hide();

    $(".dropdown-toggle").click(function () {
        $(".mega-menu-area").slideToggle("slow");
    });

    // Home Page Banner Slider
    var swiper = new Swiper("#product_slider", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        spaceBetween: 16,
        breakpoints: {
            1024: {
                slidesPerView: 5,
            },
            768: {
                slidesPerView: 4,
            },
            0: {
                slidesPerView: 2,
            },
        },
    });

    // offer_product_slider
    var swiper = new Swiper("#offer_product_slider", {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        spaceBetween: -45,
        slidesPerView: 2,
    });
});
