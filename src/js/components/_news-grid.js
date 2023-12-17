import Slider from './Slider';
import Swiper from "swiper";
import {Navigation} from "swiper/modules";

$(document).ready(function () {
    const slider = new Slider('.news-grid', {
        modules: [Navigation],
        slidesPerView: 4,
        spaceBetween: 15,

        navigation: {
            disabledClass: 'news-grid__btn_disabled',
            prevEl: `.news-grid__btn_prev`,
            nextEl: `.news-grid__btn_next`,
        },

        breakpoints: {
            992: {
                spaceBetween: 16,
                autoHeight: false,
            },

            1600: {
                spaceBetween: 24,
            }
        }
    }, {
        0: false,
        992: true,
    });
});