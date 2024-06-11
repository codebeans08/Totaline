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
