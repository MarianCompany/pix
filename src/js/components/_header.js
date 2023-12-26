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

    $('.header__nav-el-with-dropdown').on('click', function(e) {
        e.stopPropagation();
        const dropdown = $(this).find('.header__nav-dropdown');

        $('.header__nav-dropdown_active').removeClass('header__nav-dropdown_active');

        if (!dropdown.hasClass('header__nav-dropdown_active')) {
            dropdown.addClass('header__nav-dropdown_active');
        }
    });

    $(window).on('click', function() {
        $('.header__nav-dropdown_active').removeClass('header__nav-dropdown_active');
    });

    $('.close-menus').on('click', function(e) {
        e.stopPropagation();
        $('.header__nav-dropdown_active').removeClass('header__nav-dropdown_active');
    })
});
