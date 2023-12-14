import Swiper from "swiper";
import {Navigation, Pagination} from "swiper/modules";
import 'swiper/css';

$(document).ready(function () {
    const slider = new Swiper('.game-slider', {
        modules: [Navigation, Pagination],
        slidesPerView: 'auto',
        centeredSlides: true,
        centeredSlidesBounds: true,
        //autoHeight: true,
        spaceBetween: 15,

        navigation: {
            disabledClass: 'game-slider__btn_disabled',
            prevEl: `.game-slider__btn_prev`,
            nextEl: `.game-slider__btn_next`,
        },

        pagination: {
            el: '.game-slider__pagination',
            type: 'bullets',
            renderBullet: function (index, className) {
                return `<div class="${className}"></div>`
            },
            bulletClass: 'game-slider__pagination-item',
            bulletActiveClass: 'game-slider__pagination-item_active',
            clickable: true,
        },

        breakpoints: {
            992: {
                spaceBetween: 100,
                autoHeight: false,
            },

            1600: {
                spaceBetween: 150,

            }
        }
    });


});