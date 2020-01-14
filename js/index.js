var menuLength = null;

$(document).ready(function(){
    var currentIndex = 0;
    var depth2Img = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];
    var depth2Menu = $("header nav.dui ul > li > ol > li");

    var depth3Img = ['7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg'];
    var depth3Menu = $("header nav.dui ul > li > ol > li > ul > li");

    $(depth2Menu).mouseenter(function(){
        var currentIndex = $(this).attr("data-modelNumb");
        $(".bgSwap").css({
            "background-image" : "url(" + "images/" + depth2Img[currentIndex] + ")"
        });
    });

    $(depth3Menu).mouseenter(function(){
        var currentIndex = $(this).attr("data-modelNumb");
        $(".bgSwap").css({
            "background-image" : "url(" + "images/" + depth3Img[currentIndex] + ")"
        })
    });

    
    $(".slider").bxSlider({
        mode: 'horizontal',
        easing: 'ease-in-out',
        hideControlOnEnd: true,
        controls: false,
        responsive : true,
        startSlide : 0,
        speed : 5000,
        infiniteLoop : true,
        autostart : true,
        auto: true,
        autoDirection: 'next',
        autoHover : false,
        adaptiveHeight : true,
    });

    var shopCurrentIndex = 0;
    var shopImg = ["shoppingToolsBackground_01.png","shoppingToolsBackground_02.png","shoppingToolsBackground_03.png","shoppingToolsBackground_04.png"];
    var $shopTarget = $(".shoppingArea ul li");
    var $shopchangeTarget = $(".shoppingArea ul");

    $($shopTarget).mouseenter(function(){
        shopCurrentIndex = $(this).attr("data-shopNumb");
        $shopchangeTarget.css({
            "background-image" : "url(" + "images/" + shopImg[shopCurrentIndex] + ")",
            "background-repeat" : "no-repeat",
            "background-size" : "cover"
        });
    });

    var discoverCurrentIndex = 0;
    var discoverImg = ["discoverBackground_01.png","discoverBackground_02.png","discoverBackground_03.png","discoverBackground_04.png"];
    var $discoverTarget = $(".discoverArea ul li");
    var $changeTarget = $(".discoverArea ul");

    $($discoverTarget).mouseenter(function(){
        discoverCurrentIndex = $(this).attr("data-discoverNumb");
        $changeTarget.css({
            "background-image" : "url(" + "images/" + discoverImg[discoverCurrentIndex] + ")",
            "background-repeat" : "no-repeat",
            "background-size" : "cover"
        });
    });
    
});


$(function(){
    $('.menu').mouseenter(function(){
        $('.introArea img').css("opacity" , 0.3);
    });
    $('.menu').mouseleave(function(){
        $('.introArea img').css("opacity" , 1);
    });
});