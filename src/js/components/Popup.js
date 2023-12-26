export default class Popup {
    static show(popupSelector) {
        if ($(popupSelector).length !== 0) {
            $('body').addClass('body_popup-active');
            $(popupSelector).addClass('popup_active');
        } else {
            throw new Error(`Popup with selector "${popupSelector}" was not found`);
        }

        return this;
    }

    static hide(popupSelector = '') {
        if (popupSelector !== '') {
            $(popupSelector).removeClass('popup_active');
        } else {
            $('.popup_active').removeClass('popup_active');
        }

        if ($('.popup_active').length === 0) {
            $('body').removeClass('body_popup-active');
        }

        return this;
    }
}
