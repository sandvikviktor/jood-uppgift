$(document).ready(function() {
    

    // Logotypes Slider
    let logosOwl = $('#logo-carousel')
    logosOwl.owlCarousel({
        items: 4,
        loop: true,
        margin: 130,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        responsive: {
            0:{
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })

    // Mobile Screens Slider
    let screensOwl = $('#screens-carousel')
    screensOwl.owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        center: true,
        responsive: {
            0:{
                items: 1
            },
            768: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    })


    // Hide navbar-collapse on nav-link click
    $('.navbar-nav>li>a, .navbar-brand').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });


    // Navbar css change on hamburger-icon click
    $('.navbar-toggler').on('click', function(){
        $(".nav-bg").css("background", "#1488fdcc")
        $(".nav-bg").css("backdrop-filter" , "blur(5px)");
    });


    // Navbar css change on scroll
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if (scroll > 50) {
          $(".nav-bg").css("background" , "#1488fdcc");
          $(".nav-bg").css("backdrop-filter" , "blur(5px)");
          $(".navbar").css("padding-top" , "0.2em");
          $(".navbar").css("padding-bottom" , "0.2em");
        }  
        else{
            $(".nav-bg").css("background" , "transparent");  
            $(".nav-bg").css("backdrop-filter" , "unset");	
            $(".navbar").css("padding-top" , "1.5em");
            $(".navbar").css("padding-bottom" , "1.5em");
        }
    })

    // Animations on scrollspy
    $(window).on('activate.bs.scrollspy', function () {
        let pageSection = $('.nav-item a.active')[0].hash
        switch (pageSection) {
            case '#about':
                $('#about-design').addClass('zoomRotateIn')
                break;
            case '#features':
                $('#features-design').removeClass('d-none')
                $('#features-design').addClass('animate__zoomIn animate__fast animate-delay')
                break;
            default:
                break;
        }
     });

})