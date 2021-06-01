//testWebp
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
};
testWebP(function (support) {
    document.querySelector('body').classList.add('webp');
});

//menuBurger
var $menuIcon = $('#menu__icon'),
    $menuBody = $('#menu__body');

$menuIcon.on('click', function () {
    $(this).toggleClass("_active");
    $menuBody.toggleClass("_active");
});

//buttonUP
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#up').fadeIn();
        } else {
            $('#up').fadeOut();
        }
    });
    $('#up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 700);
    });
});

//fancybox
$(document).ready(function () {
    $("[data-fancybox]").fancybox
});

//header-background-color
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $("#header").addClass("bg-scroll");
    } else {
        $("#header").removeClass("bg-scroll");
    }
});
