import Popup from './Popup';

$(document).ready(function() {
    $('.popup').on('click', function(e) {
        if (this === e.target) {
            Popup.hide(`#${$(this).attr('id')}`);
        }
    });

    $('.js-open-popup').on('click', function(e) {
        e.preventDefault();
        const targetPopup = $(this).attr('data-target-popup');

        if ($(this).attr('hide-active-popup')) {
            Popup.hide();
        }

        Popup.show(`#${targetPopup}`);
    });

    $('.js-close-popup').on('click', function(e) {
        e.preventDefault();
        const targetPopup = $(this).attr('data-target-popup');

        if (targetPopup === 'this') {
            const thisPopupId = $(this).closest('.popup.popup_active').attr('id')
            Popup.hide(`#${thisPopupId}`);
        } else if (targetPopup === 'active') {
            Popup.hide();
        } else {
            throw new Error('Popup to hide was not properly specified');
        }
    });

    $('.game-media__slider-main-img, .game-media__slider-sm-img').on('click', function() {
        $(`#popup-img`).find('.popup__img').attr('src', $(this).attr('src'));
        Popup.show('#popup-img');
    });

    $('.game-trailer__video-link').on('click', function() {
        $('#popup-youtube').find('.popup__video').attr('src', `https://youtube.com/embed/${$(this).attr('data-embed-id')}`);
        Popup.show('#popup-youtube');
    });
});
