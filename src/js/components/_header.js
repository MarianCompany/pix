$(document).ready(function () {
    $('.header__burger').on('click', function() {
        if ($(this).hasClass('header__burger_active')) {
            $('body').css('overflow', 'initial');
            $(this).removeClass('header__burger_active');
            $('.header__nav').removeClass('header__nav_active');
        } else {
            $('body').css('overflow', 'hidden');
            $(this).addClass('header__burger_active');
            $('.header__nav').addClass('header__nav_active');
        }
    });
});