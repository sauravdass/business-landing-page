jQuery(document).ready(function (){
    //slider plugin code
    jQuery('#demo2').skdslider({
        slideSelector: '.slide',
        delay: 5000,
        animationSpeed: 1000,
        showNextPrev: true,
        showPlayButton: false,
        autoSlide: true,
        animationType: 'sliding'
    });
    
    //filter and mixitup plugin code
    let mixer = mixitup('.filtering');
    
    //custom jQuery code starts here
    let backToTop = $('#backToTop');
    let menu = $('.menu-bg');
    let html_body = $('html,body');
    
    $(window).on('scroll',function(){
        let scrolling = $(window).scrollTop();
        
        //sticky menu function
        if(scrolling > 110){
           menu.addClass('fixed-menu');
        }else{
            menu.removeClass('fixed-menu');
        }
        
        //back To Top hide/show function
        if(scrolling > 500){
            backToTop.fadeIn();
        }else{
            backToTop.fadeOut();
        }
    });
    
    //back To Top click function
    backToTop.on('click',function(){
        html_body.animate({
            scrollTop : 0
        },800);
        
        $('.menu-bg .menu .menu-list ul li a').removeClass('active');
        $('.menu-bg .menu .menu-list ul li a.home').addClass('active');
    });
    
    //animation on internal link up scroll js
    $('.menu-bg .menu .menu-list ul li a').on('click', function(){
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if(target.length){
                html_body.animate({
                    scrollTop: target.offset().top - 0
                },1000);
                return false;
            }
        }
        
    });
    
    //active menu item background color
    $('.menu-bg .menu .menu-list ul li a').on('click',function(){
        $('.menu-bg .menu .menu-list ul li a').removeClass('active');
        $(this).addClass('active');
    });
    
});
