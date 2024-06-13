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
        spaceBetween: 0,
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            spaceBetween: -45,
        },
    });
});

// faq page
var scrollEventEnabled = true;

$("#faq-menu a").on("click", function (event) {
    event.preventDefault();

    scrollEventEnabled = false;

    $("#faq-menu a").removeClass("active");

    $(this).addClass("active");

    var targetId = $(this).attr("href").substring(1);
    var targetElement = $("#" + targetId);
    var offsetPosition = targetElement.offset().top - 20;

    $("html, body").animate(
        {
            scrollTop: offsetPosition,
        },
        500,
        function () {
            scrollEventEnabled = true;
        },
    );
});

// Change active link on scroll
$(window).on("scroll", function () {
    if (!scrollEventEnabled) return;

    var scrollPosition = $(window).scrollTop();
    $("#faq-menu a").each(function () {
        var targetId = $(this).attr("href").substring(1);
        var targetElement = $("#" + targetId);
        var targetOffsetTop = targetElement.offset().top - 50;

        if (scrollPosition >= targetOffsetTop) {
            $("#faq-menu a").removeClass("active");
            $(this).addClass("active");
        }
    });
});




var myMagicLine = new magicLine(document.querySelectorAll(".navbar-nav"), {
    mode: "line",
    animationCallback: function (el, params) {
        anime({
            targets: el,
            left: params.left,
            top: params.top,
            width: params.width,
            height: params.height,
        });
    },
});
myMagicLine.init();

// artical details swiper
new Swiper(".artical-details", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
});

$(".copyButton").on("click", function (event) {
    event.preventDefault();
    const url = window.location.href;

    navigator.clipboard.writeText(url).then(
        function () {
            // Create the message element
            const $copyMessage = $('<div class="copy-message">Copied!</div>');

            // Append the message to the button
            $(event.target).append($copyMessage);

            // Show the message
            $copyMessage.fadeIn();

            // Hide the message after 2 seconds
            setTimeout(function () {
                $copyMessage.fadeOut(function () {
                    $(this).remove();
                });
            }, 2000);
        },
        function (err) {
            console.error("Failed to copy URL: ", err);
        },
    );
});
