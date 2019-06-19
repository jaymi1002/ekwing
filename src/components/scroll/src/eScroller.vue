<template>
    <div class="scroller" :id="myId">
        <div class="scroller-main" ref="scrollMain">
            <div class="placeholder"></div>
            <div class="scroller-item font14" v-for="(el,index) in list" :v-key="index">
                <p v-if="!wheel">{{el}}</p>
            </div>
            <div class="placeholder"></div>
        </div>
        <div class="scroller-indicator" v-if="indicator" ref="indicator">
        </div>
        <div class="scroller-mask" ref="mask">
        </div>
        <template v-if="wheel">
            <div ref="wheel" class="wheel-div">
                <div class="wheel-item font14" v-for="(el,index) in list" :v-key="index" :style="{'transform':`rotateX(${(-index)*25}deg) translate3d(0px, 0px, 3.25rem)`}">
                    <p v-show="Math.abs(index*25 - translateDeg) < 180">{{el}}</p>
                </div>
            </div>
        </template>
    </div>
</template>
<script type="text/javascript">
import IScroll from 'iscroll';
import {
    addTransitionEnd,
    removeTransitionEnd,
    css,
    cssTransition,
    cssTransform,
    style,
} from '../../../helpers/dom';
export default {
    name: 'e-scroller',
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: {
            type: Number,
            default: 0,
        },
        list: {
            type: Array,
        },
        indicator: {
            type: Boolean,
            default: true
        },
        wheel: Boolean
    },
    data() {
        return {
            current: this.value,
            rangeDeviation: 2,
            snapDist: 0,
            iscroller: {},
            numInView: 7,
            translateDeg: 0,
        }
    },
    mounted() {
        this.$nextTick(() => {
            let wheelDom = this.$refs.wheel;
            let scrollMain = this.$refs.scrollMain;
            let timer = null;

            this.snapDist = this.$el.offsetHeight / this.numInView;
            this.iscroller = new IScroll(`#${this.myId}`, {
                bounce: false,
                scrollY: true,
                deceleration: 0.005
            });

            this.$el.addEventListener('touchstart', () => {
                if (this.wheel) {
                    this.rotate3d(this.iscroller.y);
                }
            });
            this.$el.addEventListener('touchmove', () => {
                if (this.wheel) {
                    this.rotate3d(this.iscroller.y);
                }
            });
            this.$el.addEventListener('touchend', () => {
                if (this.wheel) {
                    setTimeout(() => {
                        let scrollDist = scrollMain.style['transform'].match(/(-?[0-9\.])*px/g)[1].replace('px', '');
                        css(wheelDom, cssTransition(style(scrollMain, 'transition-duration'), 'duration'));
                        this.rotate3d(scrollDist);
                    });
                }
            });
            this.iscroller.on('scrollEnd', () => {
                let scrollIndex = Math.round(Math.abs(this.iscroller.y) / this.snapDist);
                this.current = scrollIndex;
                if (Math.abs(Math.abs(this.iscroller.y) - scrollIndex * this.snapDist) < this.rangeDeviation) {
                    return false;
                }
                let fixDist = -scrollIndex * this.snapDist;
                this.iscroller.scrollTo(0, fixDist, 500, IScroll.utils.ease.circular);
                if (this.wheel) {
                    setTimeout(() => {
                        css(wheelDom, cssTransition('500ms', 'duration'));
                        this.rotate3d(fixDist);
                    });

                    function transitionEnd() {
                        css(wheelDom, cssTransition('0ms', 'duration'));
                        wheelDom.style['transition-duration'] = '0ms';
                        removeTransitionEnd(wheelDom, transitionEnd);
                    }
                    addTransitionEnd(wheelDom, transitionEnd);
                }
            });
            this.scrollTo(this.value);
            if (this.wheel) {
                this.rotate3d(-this.value * this.snapDist);
            }
        });
    },
    updated() {},
    methods: {
        refresh() {
            this.iscroller.refresh();
            this.current = Math.round(Math.abs(this.iscroller.y) / this.snapDist);
        },
        scrollTo(index) {
            this.iscroller.scrollTo(0, -index * this.snapDist);
        },
        rotate3d(scrollDist) {
            let deg = -parseFloat(scrollDist) / this.snapDist * 25;
            this.translateDeg = deg;
            css(this.$refs.wheel, cssTransform(`rotateX(${deg}deg)`));
        }
    },
    computed: {
        myId() {
            return `scoller-${this._uid}`;
        },
        length() {
            return this.list.length;
        }
    },
    watch: {
        current(newVal) {
            this.$emit('change', newVal);
        },
        value(newVal) {
            this.current = newVal;
            this.scrollTo(this.current);
            if (this.wheel) {
                this.rotate3d(-this.snapDist * this.current);
            }
        },
        length(newVal) {
            this.$nextTick(() => {
                this.refresh();
            });
        }
    }
}

</script>
<style lang="scss" scope>
$itemHight:0.933rem;
.scroller {
    height: $itemHight*7;
    overflow: hidden;
    position: relative;
}

.scroller-content {
    position: absolute;
}

.scroller-indicator {
    position: absolute;
    width: 100%;
    height: $itemHight;
    top: $itemHight * 3;
    left: 0;
    border-top: 0.013rem solid #e7e7e7;
    border-bottom: 0.013rem solid #e7e7e7;
}

.scroller-mask {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    margin: 0 auto;
    width: 100%;
    z-index: 3;
    background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), -webkit-linear-gradient(bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.4));
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.4));
    background-position: top, bottom;
    background-size: 100% (3*$itemHight - 0.1rem);
    background-repeat: no-repeat;
}

.scroller-item {
    height: $itemHight;
    line-height: 0.933rem;
    text-align: center;
}

.placeholder {
    height: $itemHight * 3;
}

.wheel-div {
    position: absolute;
    top: 3*$itemHight;
    left: 0;
    width: 100%;
    height: $itemHight;
    transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
    transform-style: preserve-3d;
    .wheel-item {
        position: absolute;
        width: 100%;
        height: $itemHight;
        top: 0;
        left: 0;
        line-height: $itemHight;
        backface-visibility: hidden;
        text-align: center;
    }
}

</style>
