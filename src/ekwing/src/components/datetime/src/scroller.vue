<template>
    <div class="scroller" :id="myId">
        <div class="scroller-main" ref="scrollMain">
            <slot></slot>
        </div>
        <div class="scroller-indicator" ref="indicator">
        </div>
        <div class="scroller-mask" ref="mask"></div>
    </div>
</template>
<script type="text/javascript">
import IScroll from 'iscroll';
export default {
    name: 'scroller',
    props: {
        numInView: {
            type: Number,
            default: 7,
        },
        value: {
            type: Number,
            default: 0,
        }
    },
    data() {
        return {
            current: this.value,
            rangeDeviation: 2,
            snapDist: 0,
            scrollMainOffsetHeight: 0,
        }
    },
    mounted() {
        let _this = this;
        this.$nextTick(function() {
            _this.snapDist = _this.$el.offsetHeight / _this.numInView;
            _this.init();
            _this.iscroller = new IScroll(`#${this.myId}`, {
                bounce: false,
                scrollY: true,
            });
            _this.iscroller.on('scrollEnd', function() {
                let scrollIndex = Math.round(Math.abs(_this.iscroller.y) / _this.snapDist);
                _this.current = scrollIndex;
                if (Math.abs(Math.abs(_this.iscroller.y) - scrollIndex * _this.snapDist) < _this.rangeDeviation) {
                    return false;
                }
                let fixDist = -scrollIndex * _this.snapDist;
                _this.iscroller.scrollTo(0, fixDist, 500, IScroll.utils.ease.circular);
            });
            _this.scrollTo(_this.value);
        });
    },
    updated() {
        this.refresh();
    },
    methods: {
        init() {
            let indicatorTop = parseInt(this.numInView / 2) * this.snapDist,
                indicatorHeight = this.snapDist,
                maskBgSize = this.snapDist * parseInt(this.numInView / 2);
            this.$refs.indicator.style.top = indicatorTop + 'px';
            this.$refs.indicator.style.height = indicatorHeight - 1 + 'px';
            this.$refs.mask.style.backgroundSize = `100% ${maskBgSize}px`;
            this.scrollMainOffsetHeight = this.$refs.scrollMain.offsetHeight;
        },
        refresh() {
            if (this.scrollMainOffsetHeight !== this.$refs.scrollMain.offsetHeight) {
                this.init();
                this.iscroller.refresh();
                this.current = Math.round(Math.abs(this.iscroller.y) / this.snapDist);
            }
        },
        scrollTo(index) {
            this.iscroller.scrollTo(0, -index * this.snapDist);
        },
    },
    computed: {
        myId() {
            return `scoller-${this._uid}`;
        },
    },
    watch: {
        current(newVal) {
            this.$emit('change', newVal);
        }
    }
}

</script>
<style lang="scss" scope>
.scroller {
    height: 100%;
    overflow: hidden;
    position: relative;
}

.scroller-content {
    position: absolute;
}

.scroller-indicator {
    position: absolute;
    width: 100%;
    height: 1.333rem;
    top: 4.0rem;
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
    background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), -webkit-linear-gradient(bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
    background-position: top, bottom;
    background-size: 100% 3.6rem;
    background-repeat: no-repeat;
}

</style>
