$(function() {
    $(".home-slider").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
        arrows: false,
        fade: true,
        cssEase: "linear"
    });

    $(".home-slider").on("afterChange", function(slick, currentSlide) {
        console.log("change");
        if ($(".slick-active").hasClass("dark")) {
            $(".header").addClass("header-dark");
        } else {
            $(".header").removeClass("header-dark");
        }
    });

    ScrollReveal().reveal(".project", {
        delay: 375,
        duration: 300,
        distance: "60px",
        viewFactor: 0.5,
        interval: 300
    });

    ScrollReveal().reveal(".project-image", {
        delay: 375,
        duration: 300,
        distance: "60px",
        interval: 300
    });

    $(window).scroll(function() {
        var s = $(window).scrollTop(),
            opacityVal = s / 150.0;
        $(".blurred-img").css("opacity", opacityVal);
    });

    /* is the hamburger menu open at the moment? */
    let isOpen = false;

    /* Hamburger layers */
    const hamburgerTop = document.getElementsByClassName("hamburgerTop")[0];
    const hamburgerMiddle = document.getElementsByClassName(
        "hamburgerMiddle"
    )[0];
    const hamburgerBottom = document.getElementsByClassName(
        "hamburgerBottom"
    )[0];

    /* Toggle hamburger menu on click */
    document
        .getElementsByClassName("mob-menu")[0]
        .addEventListener("click", toggle);

    function toggle() {
        /* If menu is open, close it */
        if (isOpen) {
            hamburgerTop.classList.remove("open");
            hamburgerMiddle.classList.remove("open");
            hamburgerBottom.classList.remove("open");
            isOpen = false;
            /* Important because otherwise menu would be opened immediately again */
            return;
        }
        /* Open menu when it is currently closed */
        hamburgerTop.classList.add("open");
        hamburgerMiddle.classList.add("open");
        hamburgerBottom.classList.add("open");
        isOpen = true;
    }

    $(".mob-menu").on("click", function() {
        if ($(".navigation").hasClass("open-menu")) {
            $(".navigation").removeClass("open-menu");
        } else {
            $(".navigation").addClass("open-menu");
        }
    });
});
