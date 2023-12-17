$(document).ready(function() {
    $('.checkbox__label').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.checkbox .text_link').on('click', (event) => {
        event.stopPropagation();
    })
});