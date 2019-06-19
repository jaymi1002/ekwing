<template>
    <div class="e-scroll-page" v-touch-swipe:300.stop.prevent="scroll">
        <div ref="scrollMain" class="e-scroll-page-main" :class="{'disabled-animate':!animateActive}">
            <slot></slot>
        </div>
    </div>
</template>
<script type="text/javascript">
import { css, cssTransform } from '../../../helpers/dom.js';
/*
 *
 *
 */
export default {
    name: 'e-scroll-page',
    props: {
        horizontal: Boolean,
        tip: Boolean,
        start: {
            type: Number,
            default: 0
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

    },
    methods: {
        init() {
            this.childSizePer = 100 / this.$children.length;
            if (this.horizontal) {
                css(this.$refs.scrollMain, {
                    width: 100 * this.$children.length + '%',
                    height: '100%'
                });
            } else {
                css(this.$refs.scrollMain, {
                    height: 100 * this.$children.length + '%',
                    width: '100%'
                });
            }
            this.gotoPage(this.start);
        },
        _animate(index) {
            this.offsetHeight = this.$el.offsetHeight;
            this.offsetWidth = this.$el.offsetWidth;
            if (this.horizontal) {
                css(this.$refs.scrollMain, cssTransform(`translate(${-index*this.offsetWidth}px, 0px) translateZ(0px)`));
            } else {
                css(this.$refs.scrollMain, cssTransform(`translate(0px, ${-index*this.offsetHeight}px) translateZ(0px)`));
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
            this.animateActive = true;
            this._animate(this.currentPage);
        },
        next() {
            this.scroll({ direction: this.horizontal ? 'left' : 'up' });
        },
        prev() {
            this.scroll({ direction: this.horizontal ? 'right' : 'down' });
        },
        gotoPage(index,animate) {
            let _this = this;
            if(!this.animate){
                this.animateActive = false;
            }
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
    }
}

</script>
