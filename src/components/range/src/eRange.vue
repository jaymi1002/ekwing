<template>
    <div class="e-range">
        <div class="e-range-left-side" v-if="sideShow">
            {{range[0]}}
        </div>
        <div class="e-range-main-wrap">
            <div class="e-range-main" ref="rangeMain">
                <div class="e-range-outter" :class="bgColorClass"></div>
                <div class="e-range-inner" :class="bgColorClass" :style="{width:(width-left)+'%',left:left+'%'}"></div>
                <div class="e-range-btn" v-if="type === 1" :style="{left:left+'%'}" v-touch-pan.horizontal="_leftTouchPanCallBack">
                    <div class="tip" v-if="tip">{{type === 0 ? value : value[0]}}</div>
                </div>
                <div class="e-range-btn" ref="rangeBtn" :style="{left:width+'%'}" v-touch-pan.horizontal="_rightTouchPanCallBack">
                    <div class="tip" v-if="tip">{{type === 0 ? value : value[1]}}</div>
                </div>
            </div>
        </div>
        <div class="e-range-right-side" v-if="sideShow">
            {{range[1]}}
        </div>
    </div>
</template>
<script type="text/javascript">
import { width } from '../../../helpers/dom';
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
            default: 'primary'
        },
        value: {
            type: [Number, Array],
            default: 0,
        },
        step: {
            type: Number,
            default: 1
        },
        sideShow: Boolean,
        tip:Boolean
    },
    data() {
        return {
            rangeWidth: 0,
            leftBtnPosition: 0,
            rightBtnPosition: 0,
            leftMovePosition: 0,
            rightMovePosition: 0,
            type: 0 // or 1
        }
    },
    created() {
        if (typeof this.value === typeof 0) {
            this.type = 0;
        } else {
            this.type = 1;
        }
    },
    computed: {
        bgColorClass() {
            return `bg-${this.color}`;
        },
        widthPercent() {
            return (this.rightBtnPosition + this.rightMovePosition) / this.rangeWidth * 100;
        },
        leftPercent() {
            return (this.leftBtnPosition + this.leftMovePosition) / this.rangeWidth * 100;
        },
        stepPercent() {
            return this.step / (this.range[1] - this.range[0]) * 100;
        },
        widthSteps() {
            return Math.round(this.widthPercent / this.stepPercent);
        },
        leftSteps() {
            return Math.round(this.leftPercent / this.stepPercent);
        },
        width() {
            return this.widthSteps * this.stepPercent;
        },
        left() {
            return this.leftSteps * this.stepPercent;
        }
    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.init();
            });
        });
    },
    methods: {
        init() {
            this.rangeWidth = width(this.$refs.rangeMain);
            this.btnWidth = width(this.$refs.rangeBtn);
            if (this.type === 0) {
                this.rightBtnPosition = this.rangeWidth / 100 * (this.value - this.range[0]);
            } else {
                this.leftBtnPosition = this.rangeWidth / 100 * (this.value[0] - this.range[0]);
                this.rightBtnPosition = this.rangeWidth / 100 * (this.value[1] - this.range[0]);
            }

        },
        _rightTouchPanCallBack({ direction, distance, isFirst, isFinal, delta }) {
            let moveRange = {
                min: -(this.rightBtnPosition - this.leftBtnPosition - (this.type === 0 ? 0 : this.rangeWidth / 100 / this.stepPercent)),
                max: this.rangeWidth - this.rightBtnPosition
            };
            if (['left', 'right'].indexOf(direction) === -1) {
                return false;
            }
            this.rightMovePosition = (direction === 'left' ? -distance.x : distance.x);
            if (this.rightMovePosition > moveRange.max) {
                this.rightMovePosition = moveRange.max;
            }
            if (this.rightMovePosition < moveRange.min) {
                this.rightMovePosition = moveRange.min;
            }

            if (isFinal) {
                this.rightBtnPosition = this.rightBtnPosition + this.rightMovePosition;
                this.rightMovePosition = 0;
            }
            if (delta.x !== 0) {
                if (this.type === 0) {
                    this.$emit('change', this.widthSteps * this.step + this.range[0]);
                } else {
                    this.$emit('change', [this.value[0], this.widthSteps * this.step + this.range[0]]);
                }
            }
        },
        _leftTouchPanCallBack({ direction, distance, isFirst, isFinal, delta }) {
            let moveRange = {
                min: -this.leftBtnPosition,
                max: this.rightBtnPosition - this.leftBtnPosition - this.rangeWidth / 100 / this.stepPercent
            };
            if (['left', 'right'].indexOf(direction) === -1) {
                return false;
            }
            this.leftMovePosition = (direction === 'left' ? -distance.x : distance.x);
            if (this.leftMovePosition > moveRange.max) {
                this.leftMovePosition = moveRange.max;
            }
            if (this.leftMovePosition < moveRange.min) {
                this.leftMovePosition = moveRange.min;
            }

            if (isFinal) {
                this.leftBtnPosition = this.leftBtnPosition + this.leftMovePosition;
                this.leftMovePosition = 0;
            }
            if (delta.x !== 0) {
                this.$emit('change', [this.leftSteps * this.step + this.range[0], this.value[1]]);
            }
        }
    },
    watch: {
        value(newVal) {
            if (this.type === 0) {
                if (this.rightMovePosition === 0) {
                    this.rightBtnPosition = this.rangeWidth / 100 * (newVal - this.range[0]);
                }
            } else {
                if (this.rightMovePosition === 0 && this.leftMovePosition === 0) {
                    this.leftBtnPosition = this.rangeWidth / 100 * (newVal[0] - this.range[0]);
                    this.rightBtnPosition = this.rangeWidth / 100 * (newVal[1] - this.range[0]);
                }
            }
        }
    }
}

</script>
<style lang="scss">
.e-range {
    position: relative;
    display: flex;
    padding: 0.267rem 0.4rem;
    .e-range-left-side,
    .e-range-right-side {
        flex: 0 0 auto;
        justify-content: center;
        align-items: center;
    }
    .e-range-left-side {
        margin-right: 0.533rem;
    }
    .e-range-right-side {
        margin-left: 0.533rem;
    }
    .e-range-main-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1 1 0;
    }
    .e-range-main {
        position: relative;
        height: 0.133rem;
        width: 100%;
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
        background-color: #fff;
        box-shadow: 0 0.013rem 0.067rem rgba(0, 0, 0, 0.4);
        &:active {
            transform: scale(1.2)
        }
        .tip {
            position: absolute;
            width: 1.067rem;
            padding: 0 0.2rem;
            text-align: center;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.7);
            border-radius: 0.133rem;
            top: -0.867rem;
            left: 50%;
            transform: translateX(-50%);
        }
        .tip:after {
            content:'';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateY(100%) translateX(-50%);
            width: 0;
            height: 0;
            border-width: 0.133rem;
            border-style: solid;
            border-color: rgba(0, 0, 0, 0.7) transparent transparent transparent;
        }
    }
}

</style>
