<template>
    <div class="e-scroll" :id="myId">
        <div class="e-scroll-main" ref="scrollMain">
            <div class="pull-down font14" v-if="downActive" ref="pullDownDom">
                <slot name="pullDrefreshtxt" v-if="!downOverMax && !isPullDown">下拉刷新~</slot>
                <slot name="realtimetxt" v-if="downOverMax">松手加载~</slot>
                <slot name="loadertxt" v-if="isPullDown">加载中~</slot>
            </div>
            <div class="e-scroll-content" ref="scrollContent">
                <slot></slot>
            </div>
            <div class="pull-up font14" v-if="upActive && !isOver" ref="pullUpDom">
                <slot name="upLoadmoretxt" v-if="!upOverMax && !isPullUp">上拉加载更多~</slot>
                <slot name="realtimetxt" v-if="upOverMax">松手加载~</slot>
                <slot name="loadertxt" v-if="isPullUp">加载中~</slot>
            </div>
            <div class="pull-up font14" v-if="isOver">
                <slot name="loaderendtxt">---我是最后的底线---</slot>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import IScroll from 'iscroll/build/iscroll-probe';
import { width, height, style, css } from '../../../helpers/dom.js';
export default {
    name: 'e-scroll',
    props: {
        bounce: {
            type: Boolean,
            default: true,
        },
        click: Boolean,
        eventPassthrough: Boolean,
        freeScroll: Boolean,
        momentum: {
            type: Boolean,
            default: true,
        },
        fadeScrollbars: Boolean,
        preventDefault: {
            type: Boolean,
            default: true,
        },
        startX: {
            type: Number,
            default: 0,
        },
        startY: {
            type: Number,
            default: 0
        },
        snap: {
            type: [Boolean, String],
            default: false
        },
        //滚动条
        scrollbars: Boolean,
        fadeScrollbars: Boolean,
        interactiveScrollbars: Boolean,
        resizeScrollbars: Boolean,
        shrinkScrollbars: Boolean,
        //上拉，下拉，
        pullDownActive: Boolean,
        pullUpActive: Boolean,
        //
        horizontal: Boolean
    },
    data() {
        return {
            iscroller: null,
            isPullDown: false,
            isPullUp: false,

            //是否超出可以触发加载的临界值
            downOverMax: false,
            upOverMax: false,

            //是否使用上拉下拉
            downActive: false,
            upActive: false,

            isOver: false,

            eScrollDom: null,
            pullDownDom: null,
            pullUpDom: null,
            scrollMain: null,
            scrollContent: null,
        }
    },
    created() {
        if (this.pullUpActive) {
            this.upActive = true;
        }
        if (this.pullDownActive) {
            this.downActive = true;
        }
    },
    mounted() {
        this.eScrollDom = document.querySelector('#' + this.myId);
        this.scrollMain = this.$refs.scrollMain;
        this.scrollContent = this.$refs.scrollContent;
        this.pullDownDom = this.$refs.pullDownDom;
        this.pullUpDom = this.$refs.pullUpDom;
        this.$nextTick(() => {
            this.iscroller = new IScroll('#' + this.myId, {
                bounce: this.bounce,
                click: this.click,
                eventPassthrough: this.eventPassthrough,
                freeScroll: this.freeScroll,
                momentum: this.momentum,
                preventDefault: this.preventDefault,
                scrollX: this.horizontal ? true : false,
                scrollY: !this.horizontal ? true : false,
                startX: this.startX,
                startY: this.startY,
                snap: this.snap,
                //滚动条
                scrollbars: this.scrollbars,
                fadeScrollbars: this.fadeScrollbars,
                interactiveScrollbars: this.interactiveScrollbars,
                resizeScrollbars: this.resizeScrollbars,
                shrinkScrollbars: this.shrinkScrollbars,
                probeType: 1
            });

            this.iscroller.on('scrollEnd', () => {
                this.$emit('scrollEndHandle', { x: this.iscroller.x, y: this.iscroller.y });
            });
            if (this.horizontal) {
                setTimeout(() => {
                    this.setHorziontalStyle();
                });
                return;
            }
            if (!this.upActive && !this.downActive) {
                return;
            }

            this.iscroller.on('scroll', () => {
                let scrollMainHeight = height(this.scrollMain),
                    scrollDomHeight = height(this.eScrollDom);
                if (this.downActive) {
                    if (this.iscroller.y > 0) {
                        this.downOverMax = true;
                    } else {
                        this.downOverMax = false;
                    }
                }

                if (this.upActive) {
                    if (scrollMainHeight + this.iscroller.y - scrollDomHeight < 0) {
                        this.upOverMax = true;
                    } else {
                        this.upOverMax = false;
                    }
                }
            });
            this.scrollMain.addEventListener('touchend', () => {
                let scrollMainHeight = height(this.scrollMain),
                    scrollDomHeight = height(this.eScrollDom);
                this.downOverMax = false;
                this.upOverMax = false;
                //判断下拉
                if (this.downActive) {
                    this.judgePullDown({
                        scrollMainHeight,
                        scrollDomHeight
                    });
                }


                //判断上拉
                if (this.upActive) {
                    this.judgePullUp({
                        scrollMainHeight,
                        scrollDomHeight
                    });
                }
            });

            this.iscroller.on('scrollEnd', () => {
                //停止自动加载更多
                if (this.upActive) {
                    this.judgePullUp({
                        scrollMainHeight:height(this.scrollMain),
                        scrollDomHeight:height(this.eScrollDom)
                    });
                }
                
                if (this.downActive && this.isPullDown) {
                    this.pullEnd('down');
                }
                if (this.upActive && this.isPullUp && !this.isOver) {
                    this.pullEnd('up');
                }
            });
            this.pullEnd('down');
        });
    },
    updated() {},
    computed: {
        myId() {
            return 'e-scroll' + this._uid;
        }
    },
    methods: {
        judgePullUp({ scrollMainHeight, scrollDomHeight }) {
            let pullUpDomHeight = height(this.pullUpDom);
            if (scrollMainHeight + this.iscroller.y - scrollDomHeight <= 1) {
                this.isPullUp = true;
            }
            if (!this.isPullUp &&
                scrollMainHeight + this.iscroller.y - scrollDomHeight > 0 &&
                scrollMainHeight + this.iscroller.y - scrollDomHeight < pullUpDomHeight) {
                setTimeout(() => {
                    this.iscroller.scrollTo(0, pullUpDomHeight + scrollDomHeight - scrollMainHeight, 500, IScroll.utils.ease.circular);
                });
            }
        },
        judgePullDown({ scrollMainHeight, scrollDomHeight }) {
            let pullDownDomHeight = height(this.pullDownDom);
            if (this.iscroller.y > 0) {
                this.isPullDown = true;
            }
            if (this.iscroller.y < 0 &&
                this.iscroller.y > -pullDownDomHeight) {
                setTimeout(() => {
                    this.iscroller.scrollTo(0, -pullDownDomHeight, 500, IScroll.utils.ease.circular);
                });
            }
            if (!this.isPullDown && this.iscroller.y > -pullDownDomHeight) {
                this.iscroller.scrollTo(0, -pullDownDomHeight, 500, IScroll.utils.ease.circular);
            }
        },
        reInitActive() {
            if (this.pullUpActive) {
                this.upActive = true;
            }
            if (this.pullDownActive) {
                this.downActive = true;
            }
        },
        setHorziontalStyle() {
            let width = 0,
                elements = this.scrollContent.children;
            for (var i = 0; i < elements.length; i++) {
                let computedStyle = window.getComputedStyle(elements[i]);
                width += (Math.ceil(elements[i].offsetWidth + parseFloat(computedStyle.getPropertyValue('margin-left'), 10) + parseFloat(computedStyle.getPropertyValue('margin-right'), 10)) + 1);
            }
            css(this.scrollContent, {
                width: `${width}px`
            });
            css(this.scrollMain, {
                width: `${width}px`
            });
            this.iscroller.refresh();
        },
        refresh() {
            this.pullDownDom = this.$refs.pullDownDom;
            this.pullUpDom = this.$refs.pullUpDom;

            //判断scrollContent高度是否一屏
            let judgeHeight = this.scrollContent.offsetHeight;
            if (this.eScrollDom.offsetHeight > judgeHeight) {
                this.upActive = false;
            }
            //设置最小高度
            let scrollMainMinHeight = this.eScrollDom.offsetHeight;
            if (this.upActive) {
                scrollMainMinHeight += this.pullUpDom.offsetHeight;
            }
            if (this.downActive) {
                scrollMainMinHeight += this.pullDownDom.offsetHeight;
            }
            this.scrollMain.style.minHeight = scrollMainMinHeight + 'px';
            //滑到顶部pullDownDom下
            if (this.downActive) {
                this.iscroller.scrollTo(0, -this.pullDownDom.offsetHeight);
            }
            this.iscroller.refresh();
        },
        resetPullDownPosition() {
            this.isPullDown = false;
            this.iscroller.scrollTo(0, -this.pullDownDom.offsetHeight, 500, IScroll.utils.ease.circular);
        },
        pullEnd(str) {
            if (str === 'down') {
                if(!this.downActive){
                    this.reInitActive();
                    this.$nextTick(() => {
                        this.refresh();
                    });
                    return false;
                }
                this.$emit('pullDownHandle', () => {
                    this.reInitActive();
                    this.$nextTick(() => {
                        //数据加载之后重新refresh 和 resetPullDownPosition
                        this.refresh();
                        this.resetPullDownPosition();
                    });
                });
            } else {
                this.$emit('pullUpHandle', (isOver) => {
                    this.isPullUp = false;
                    if (isOver) {
                        this.isOver = true;
                    }
                    this.$nextTick(() => {
                        this.iscroller.refresh();
                    });
                });
            }
        }
    },
}

</script>
<style lang="scss">
.e-scroll {
    position: relative;
}

</style>
