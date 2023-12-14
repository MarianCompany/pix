$(document).ready(function () {
    $('.js-toggle-contacts').on('click', function () {
        const content = $('.footer__contacts-content');
        content.stop(true, true);

        if ($(this).hasClass('js-toggle-contacts_active')) {
            content.slideUp();
            $(this).removeClass('js-toggle-contacts_active');
        } else {
            content.slideDown();
            $(this).addClass('js-toggle-contacts_active');
        }
    });
});