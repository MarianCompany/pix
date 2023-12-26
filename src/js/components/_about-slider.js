import Swiper from "swiper";
import {Autoplay} from "swiper/modules";
import 'swiper/css';

$(document).ready(function () {
    const slider = new Swiper('.gallery__slider', {
        modules: [Autoplay],
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 750,
        allowTouchMove: false,

        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
        }
    })
});