import Swiper from 'swiper';
import _ from "lodash";

export default class Slider {
    constructor(swiperId, configuration, breakpoints = null) {
        this.swiperId = swiperId;
        this.configuration = configuration;
        this.breakpoints = breakpoints;

        this.swiper = this.createSwiper(swiperId, configuration);

        if (this.breakpoints) {
            this.checkBreakpoints();
            $(window).on('resize', _.throttle(this.checkBreakpoints.bind(this), 200));
        }
    }

    createSwiper() {
        if ($(this.swiperId).length === 0) {
            return null;
        }

        return new Swiper(this.swiperId, this.configuration);
    }

    checkBreakpoints() {
        if (!this.swiper) {
            return;
        }

        const intervals = [...Object.keys(this.breakpoints), Infinity];
        const cWidth = $(window).width();

        for (let i = 0; i < intervals.length - 1; i++) {
            const [from, to] = [Number(intervals[i]), Number(intervals[i + 1])];
            if (cWidth >= from && cWidth < to) {
                if (!this.breakpoints[from] && !this.swiper.destroyed) {
                    this.swiper.destroy(true, true);
                } else if (this.breakpoints[from] && this.swiper.destroyed) {
                    this.swiper = this.createSwiper();
                }
            }
        }
    }
}
