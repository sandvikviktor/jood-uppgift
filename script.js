$(document).ready(function() {

    // Hide navbar-collapse on link click
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
                $('#about-design').removeClass('d-none')
                $('#about-design').addClass('animate__rotateIn animate__slow animate-delay')
                $('#about-smartphone').addClass('animate__fadeIn animate__faster')
                break;
            case '#features':
                $('#features-smartphone, #features-design').removeClass('d-none')
                $('#features-design').addClass('animate__zoomIn animate__fast animate-delay')
                $('#features-smartphone').addClass('animate__fadeIn animate__faster')
                break;
            default:
                break;
        }
     });

})