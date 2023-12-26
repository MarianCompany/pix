import Swiper from "swiper";
import {EffectFade, Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-fade';

$(document).ready(function () {
    const mainSliderToMd = new Swiper('.game-media__slider-main_to-md', {
        modules: [EffectFade, Navigation],
        effect: 'fade',
        crossFade: true,
        loop: true,
        allowTouchMove: false,

        navigation: {
            disabledClass: 'game-slider__btn_disabled',
            prevEl: `.game-media__btn_prev`,
            nextEl: `.game-media__btn_next`,
        },
    });

    const smSlider = new Swiper('.game-media__slider-sm', {
        initialSlide: 1,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 10,
        allowTouchMove: false,

        breakpoints: {
            992: {
                direction: 'vertical',
                spaceBetween: 20,
            }
        }
    });

    const mainSliderFromMd = new Swiper('.game-media__slider-main_from-md', {
        modules: [Navigation],
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,

        navigation: {
            disabledClass: 'game-slider__btn_disabled',
            prevEl: `.game-media__btn_prev`,
            nextEl: `.game-media__btn_next`,
        },
    });

    mainSliderToMd.on('slideNextTransitionStart', function (s) {
        smSlider.slideNext();
    })

    mainSliderToMd.on('slidePrevTransitionStart', function (s) {
        smSlider.slidePrev();
    })
});