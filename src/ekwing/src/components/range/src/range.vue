<template>
    <e-item class="e-range">
        <e-item-side v-if="sideShow">
            {{range[0]}}
        </e-item-side>
        <e-item-main justify-content="center">
            <div class="e-range-main">
                <div class="e-range-outter" :class="bgColorClass"></div>
                <div class="e-range-inner" :class="bgColorClass" :style="{width:btnLeftPer+'%'}"></div>
                <div class="e-range-btn" :class="[`bg-${btnColor}`,`text-${color}`]" :style="{left:btnLeftPer+'%'}" v-touch-pan.horizontal="_touchPanCallBack">{{value}}</div>
            </div>
        </e-item-main>
        <e-item-side v-if="sideShow">
            {{range[1]}}
        </e-item-side>
    </e-item>
</template>
<script type="text/javascript">
export default {
    name: 'e-range',
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        range: {
            type: Array,
            default: () => [0, 100],
            validator(value) {
                return value.length === 2 && value[1] > value[0];
            }
        },
        color: {
            type: String,
            default: 'blue'
        },
        btnColor: {
            type: String,
            default: 'blue-tint'
        },
        value: {
            type: Number,
            default: 0,
        },
        step: {
            type: Number,
            default: 1
        },
        sideShow: Boolean
    },
    data() {
        return {
            btnPosition: 0,
            movePostion: 0,
            rangeWidth: 0,
        }
    },
    computed: {
        bgColorClass() {
            return `bg-${this.color}`;
        },
        percent() {
            return (this.btnPosition + this.movePostion) / this.rangeWidth * 100;
        },
        stepPercent() {
            return this.step / (this.range[1] - this.range[0]) * 100;
        },
        steps() {
            return Math.round(this.percent / this.stepPercent);
        },
        btnLeftPer() {
            return this.steps * this.stepPercent;
        }
    },
    mounted() {
        let _this = this;
        this.$nextTick(function() {
            setTimeout(function() {
                _this.init();
            });
        });
    },
    methods: {
        init() {
            let rangeMain = this.$el.querySelectorAll('.e-range-main')[0];
            this.rangeWidth = rangeMain.offsetWidth;
            if (!this.value || this.value < this.range[0]) {
                this.$emit('change', this.range[0]);
                this.btnPosition = 0;
            } else {
                this.btnPosition = this.rangeWidth / 100 * (this.value - this.range[0]);
            }
        },
        _touchPanCallBack({ direction, distance, isFirst, isFinal, delta }) {
            let rangeWidth = this.$el.querySelectorAll('.e-range-main')[0].offsetWidth;
            let moveRange = {
                min: -this.btnPosition,
                max: rangeWidth - this.btnPosition
            };
            if (['left', 'right'].indexOf(direction) === -1) {
                return false;
            }
            this.movePostion = (direction === 'left' ? -distance.x : distance.x);
            if (this.movePostion > moveRange.max) {
                this.movePostion = moveRange.max;
            }
            if (this.movePostion < moveRange.min) {
                this.movePostion = moveRange.min;
            }

            if (isFinal) {
                this.btnPosition = this.btnPosition + this.movePostion;
                this.movePostion = 0;
            }
            if (delta.x !== 0) {
                this.$emit('change', this.steps * this.step + this.range[0]);
            }
        }
    },
    watch:{
        value(newVal){
            if(this.movePostion === 0){
                this.btnPosition = this.rangeWidth / 100 * (newVal - this.range[0]);
            }
        }
    }
}

</script>
<style lang="scss">
.e-range {
    position: relative;
    .e-range-main {
        position: relative;
        height: 0.133rem;
        width: 90%;
    }
    .e-range-inner,
    .e-range-outter {
        border-radius: 999px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .e-range-inner {
        width: 0;
    }
    .e-range-outter {
        width: 100%;
        opacity: 0.3;
    }
    .e-range-btn {
        position: absolute;
        width: 0.667rem;
        height: 0.667rem;
        line-height: 0.667rem;
        text-align: center;
        margin-top: -0.267rem;
        margin-left: -0.333rem;
        left: 20%;
        border-radius: 50%;
        &:active {
            transform: scale(1.2)
        }
    }
}

</style>
