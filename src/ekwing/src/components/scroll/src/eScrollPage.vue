<template>
    <div class="e-scroll-page" v-touch-swipe:300.stop.prevent="scroll">
        <div ref="scrollMain" class="e-scroll-page-main" :style="scrollStyle">
            <slot></slot>
        </div>
    </div>
</template>
<script type="text/javascript">
/*
 *
 *
 */
export default {
    name: 'e-scroll-page',
    props: {
        horizontal: Boolean,
        duration: {
            type: Number,
            default: 500,
        },
        tip: Boolean,
        start: {
            type: Number,
            default: 0
        },
        transition: {
            type: Boolean,
            default: true,
        }
    },
    data() {
        return {
            currentPage: 0,
            offsetHeight: 0,
            offsetWidth: 0,
            animateActive: this.transition,
            childSizePer: 0,
        }
    },
    mounted() {
        let _this = this;
        this.$nextTick(function() {
            _this.init();
        });
    },
    computed: {
        scrollStyle() {
            if (this.animateActive) {
                return {
                    'transition-duration': `${this.duration}ms`,
                    '-webikt-transition-duration': `${this.duration}ms`,
                }
            } else {
                return {
                    'transition-duration': '0ms',
                    '-webikt-transition-duration': '0ms',
                }
            }
        },
    },
    methods: {
        init() {
            this.childSizePer = 100 / this.$children.length;
            if (this.horizontal) {
                this.$refs.scrollMain.style.width = 100 * this.$children.length + '%';
                this.$refs.scrollMain.style.height = 100 + '%';
            } else {
                this.$refs.scrollMain.style.height = 100 * this.$children.length + '%';
                this.$refs.scrollMain.style.width = 100 + '%';
            }
            this.gotoPage(this.start);
        },
        _animate(index) {
            this.offsetHeight = this.$el.offsetHeight;
            this.offsetWidth = this.$el.offsetWidth;
            if (this.horizontal) {
                this.$refs.scrollMain.style['transform'] = `translate(${-index*this.offsetWidth}px, 0px) translateZ(0px)`;
                this.$refs.scrollMain.style['webkitTransform'] = `translate(${-index*this.offsetWidth}px , 0px) translateZ(0px)`;
            } else {
                this.$refs.scrollMain.style['transform'] = `translate(0px, ${-index*this.offsetHeight}px) translateZ(0px)`;
                this.$refs.scrollMain.style['webkitTransform'] = `translate(0px, ${-index*this.offsetHeight}px) translateZ(0px)`;
            }
            this.$emit('scrollEnter', index);
        },
        scroll({ direction }) {
            let abort = (direction === 'right' || direction === 'left') && !this.horizontal ||
                (direction === 'up' || direction === 'down') && this.horizontal;
            if (abort) return false;
            if ((direction === 'up' || direction === 'left')) {
                if (this.currentPage >= this.$children.length - 1) {
                    if (this.tip) {
                        this.$toast({ content: '已经是最后一页了~' });
                    }
                    return false;
                }
                this.$emit('scrollLeave', this.currentPage);
                this.currentPage++;
            }
            if ((direction === 'down' || direction === 'right')) {
                if (this.currentPage <= 0) {
                    if (this.tip) {
                        this.$toast({ content: '已经是第一页了~' });
                    }
                    return false;
                }
                this.$emit('scrollLeave', this.currentPage);
                this.currentPage--;
            }
            this.animateActive = this.transition;
            this._animate(this.currentPage);
        },
        next() {
            this.scroll({ direction: this.horizontal ? 'left' : 'up' });
        },
        prev() {
            this.scroll({ direction: this.horizontal ? 'right' : 'down' });
        },
        gotoPage(index) {
            let _this = this;
            this.animateActive = false;
            if (index > this.$children.length - 1) {
                index = this.$children.length - 1;
            }
            if (index < 0) {
                index = 0;
            }
            this.currentPage = index;
            this.$nextTick(() => {
                _this._animate(this.currentPage);
            });
        }
    },
    watch: {
        transition(newVal) {
            this.animateActive = newVal;
        }
    }
}

</script>
<style lang="scss">
@import '../style/scroll.scss';

</style>
