<template>
    <div class="e-scroll" :id="myId">
        <div class="e-scroll-main" ref="scrollMain">
            <div class="pull-down" v-if="downActive" ref="pullDownDom">
                <slot name="pullDrefreshtxt" v-if="!downOverMax && !isPullDown">下拉刷新~</slot>
                <slot name="Realtimetxt" v-if="downOverMax">松手加载~</slot>
                <slot name="loadertxt" v-if="isPullDown">加载中~</slot>
            </div>
            <div class="e-scroll-content" ref="scrollContent">
                <slot></slot>
            </div>
            <div class="pull-up" v-if="upActive && !isOver" ref="pullUpDom">
                <slot name="upLoadmoretxt" v-if="!upOverMax && !isPullUp">上拉加载更多~</slot>
                <slot name="Realtimetxt" v-if="upOverMax">松手加载~</slot>
                <slot name="loadertxt" v-if="isPullUp">加载中~</slot>
            </div>
            <div class="pull-up" v-if="isOver">
                <slot name="loaderendtxt">---我是最后的底线---</slot>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import IScroll from 'iscroll/build/iscroll-probe.js';
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
    created() {
        if (this.pullUpActive) {
            this.upActive = true;
        }
        if (this.pullDownActive) {
            this.downActive = true;
        }
    },
    mounted() {
        let _this = this;
        this.eScrollDom = document.querySelector('#' + this.myId);
        this.scrollMain = this.$refs.scrollMain;
        this.scrollContent = this.$refs.scrollContent;
        _this.$nextTick(function() {
            _this.iscroller = new IScroll('#' + _this.myId, {
                bounce: _this.bounce,
                click: _this.click,
                eventPassthrough: _this.eventPassthrough,
                freeScroll: _this.freeScroll,
                momentum: _this.momentum,
                preventDefault: _this.preventDefault,
                scrollX: _this.horizontal ? true : false,
                scrollY: !_this.horizontal ? true : false,
                startX: _this.startX,
                startY: _this.startY,
                snap: _this.snap,
                //滚动条
                scrollbars: _this.scrollbars,
                fadeScrollbars: _this.fadeScrollbars,
                interactiveScrollbars: _this.interactiveScrollbars,
                resizeScrollbars: _this.resizeScrollbars,
                shrinkScrollbars: _this.shrinkScrollbars,
                probeType: 1
            });
            _this.iscroller.on('scrollEnd', function() {
                _this.$emit('scrollEnd', { x: _this.iscroller.x, y: _this.iscroller.y });
            });
            setTimeout(function() {
                _this.init();
                if (!_this.upActive && !_this.downActive) {
                    return;
                }
                _this.iscroller.on('scroll', function() {
                    if (_this.downActive) {
                        if (_this.iscroller.y > 0) {
                            _this.downOverMax = true;
                        } else {
                            _this.downOverMax = false;
                        }
                    }

                    if (_this.upActive) {
                        if (_this.scrollMain.offsetHeight + _this.iscroller.y - _this.eScrollDom.offsetHeight < 0) {
                            _this.upOverMax = true;
                        } else {
                            _this.upOverMax = false;
                        }
                    }
                });
                _this.scrollMain.addEventListener('touchend', function() {
                    _this.downOverMax = false;
                    _this.upOverMax = false;

                    if (_this.downActive && _this.iscroller.y > 0) {
                        _this.isPullDown = true;
                    }
                    if (_this.downActive && _this.iscroller.y < 0 &&
                        _this.iscroller.y > -_this.pullDownDom.offsetHeight) {
                        setTimeout(function() {
                            _this.iscroller.scrollTo(0, -_this.pullDownDom.offsetHeight, 500, IScroll.utils.ease.circular);
                        });
                    }
                    if (_this.upActive &&
                        _this.scrollMain.offsetHeight + _this.iscroller.y - _this.eScrollDom.offsetHeight < 0) {
                        _this.isPullUp = true;
                    }
                    if (_this.upActive &&
                        _this.scrollMain.offsetHeight + _this.iscroller.y - _this.eScrollDom.offsetHeight > 0 &&
                        _this.scrollMain.offsetHeight + _this.iscroller.y - _this.eScrollDom.offsetHeight < _this.pullUpDom.offsetHeight) {

                        setTimeout(function() {
                            _this.iscroller.scrollTo(0, _this.pullUpDom.offsetHeight + _this.eScrollDom.offsetHeight - _this.scrollMain.offsetHeight, 500, IScroll.utils.ease.circular);
                        });
                    }
                });
                _this.iscroller.on('scrollEnd', function() {
                    if (_this.downActive && _this.isPullDown) {
                        _this.pullEnd('down');
                    }
                    if (_this.upActive && _this.isPullUp && !_this.isOver) {
                        _this.pullEnd('up');
                    }
                });
            });
            setTimeout(function() {
                _this.iscroller.refresh();
            });
        });
    },
    updated() {},
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
    computed: {
        myId() {
            return 'e-scroll' + this._uid;
        },
    },
    methods: {
        reInitActive() {
            if (this.pullUpActive) {
                this.upActive = true;
            }
            if (this.pullDownActive) {
                this.downActive = true;
            }
        },
        init() {
            this.refresh();
        },
        refresh() {
            let _this = this;
            this.pullDownDom = this.$refs.pullDownDom;
            this.pullUpDom = this.$refs.pullUpDom;
            //水平方向
            if (_this.horizontal) {
                let div = _this.scrollContent;
                let width = 0,
                    elements = div.children;
                for (var i = 0; i < elements.length; i++) {
                    let computedStyle = window.getComputedStyle(elements[i]);
                    width += (elements[i].offsetWidth + parseFloat(computedStyle.marginLeft, 10) + parseFloat(computedStyle.marginRight, 10));
                }
                _this.scrollContent.style.width = width + 1 + 'px';
                _this.scrollMain.style.width = width + 1 + 'px';

                //纵向
            } else {
                //判断scrollContent高度是否一屏
                let judgeHeight = _this.scrollContent.offsetHeight;
                if (_this.upActive) {
                    judgeHeight -= _this.pullUpDom.offsetHeight;
                }
                if (_this.downActive) {
                    judgeHeight -= _this.pullDownDom.offsetHeight;
                }

                if (_this.eScrollDom.offsetHeight > judgeHeight) {
                    _this.upActive = false;
                }


                //设置最小高度
                let scrollMainMinHeight = _this.eScrollDom.offsetHeight;
                if (_this.upActive) {
                    scrollMainMinHeight += _this.pullUpDom.offsetHeight;
                }
                if (_this.downActive) {
                    scrollMainMinHeight += _this.pullDownDom.offsetHeight;
                }
                _this.scrollMain.style.minHeight = scrollMainMinHeight + 'px';

                //滑到顶部pullDownDom下
                if (_this.downActive) {
                    _this.iscroller.scrollTo(0, -_this.pullDownDom.offsetHeight);
                }
            }
        },
        resetPullDownPosition() {
            this.isPullDown = false;
            this.iscroller.scrollTo(0, -this.pullDownDom.offsetHeight, 500, IScroll.utils.ease.circular);
        },
        pullEnd(str) {
            let _this = this;
            if (str === 'down') {
                this.$emit('pullDown', function() {
                    _this.reInitActive();
                    _this.$nextTick(function() {
                        //数据加载之后重新refresh 和 resetPullDownPosition
                        _this.refresh();
                        _this.iscroller.refresh();
                        _this.resetPullDownPosition();
                    });
                });
            } else {
                this.$emit('pullUp', function(isOver) {
                    _this.isPullUp = false;
                    if (isOver) {
                        _this.isOver = true;
                    }
                    _this.$nextTick(function() {
                        _this.iscroller.refresh();
                    });
                });
            }
        }
    },
}

</script>
<style lang="scss">
@import '../style/scroll.scss';
.e-scroll {
    position: relative;
}

.scroller-mask {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    margin: 0 auto;
    width: 100%;
    z-index: 3;
    background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), -webkit-linear-gradient(bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
    background-position: top, bottom;
    background-size: 100% 4.0rem;
    background-repeat: no-repeat;
}

</style>
