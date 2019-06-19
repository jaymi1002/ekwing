<template>
    <div class="e-cir-progress">
        <svg width="100" height="100" viewBox="0 0 100 100" style="width:100%;height:100%;">
            <path :d="relativePath" fill="transparent" stroke-width="2.5" :stroke="relativeColor" />
            <path ref="currentRing" class="current-ring" :d="currentPath" fill="transparent" stroke-width="3" :stroke="currentColor" :stroke-dasharray="strokeDasharray" />
            <circle v-show="!noCirCleBar" ref="circle" class="cir-progress-circle" :cx="startX" :cy="startY" r="4" :fill="currentColor" />
        </svg>
        <div class="cir-progress-content">
            <slot></slot>
        </div>
    </div>
</template>
<script type="text/javascript">
let PI = Math.PI;
export default {
    name: 'e-cir-progress',
    props: {
        progress: {
            type: Number,
            default: 0,
            validator(value) {
                return value >= 0 && value <= 100;
            }
        },
        relativeColor: {
            type: String,
            default: '#8ddcf4'
        },
        currentColor: {
            type: String,
            default: '#fef38e'
        },
        initDeg: {
            type: Number,
            default: 45,
        },
        noCirCleBar: Boolean,
    },
    mounted() {
        let _this = this;
        setTimeout(function() {
            _this.currentProgress = _this.progress;
        }, 100);
    },
    data() {
        return {
            r: 48,
            currentProgress: 0,
            degree: 0
        }
    },
    computed: {
        startX() {
            return 50 - Math.floor(Math.sin(this.initDeg * PI / 180) * 1000) / 1000 * this.r;
        },
        startY() {
            return 50 + Math.floor(Math.cos(this.initDeg * PI / 180) * 1000) / 1000 * this.r;
        },
        relEndX() {
            return 50 - Math.floor(Math.sin((360 - this.initDeg) * PI / 180) * 1000) / 1000 * this.r;
        },
        relEndY() {
            return 50 + Math.floor(Math.cos((360 - this.initDeg) * PI / 180) * 1000) / 1000 * this.r;
        },
        relLargeArcFlag() {
            return this.initDeg > 90 ? 0 : 1;
        },
        relativePath() {
            return `M ${this.startX} ${this.startY} A ${this.r} ${this.r} 0 ${this.relLargeArcFlag} 1 ${this.relEndX} ${this.relEndY}`;
        },
        strokeDasharray() {
            return `0,${2 * PI * this.r}`
        },
        currentPath() {
            let largeArcFlag = 0,
                endX = 0,
                endY = 0,
                degree = this.initDeg + (this.currentProgress / 100 * (360 - 2 * this.initDeg));
            this.degree = degree;
            if (this.currentProgress > 50) {
                largeArcFlag = 1;
            } else {
                largeArcFlag = 0;
            }
            endX = 50 - Math.floor(Math.sin(degree * PI / 180) * 1000) / 1000 * this.r;
            endY = 50 + Math.floor(Math.cos(degree * PI / 180) * 1000) / 1000 * this.r;
            return `M ${this.startX} ${this.startY} A ${this.r} ${this.r} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
        }
    },
    methods: {
        disableAnimate() {
            this.$refs.currentRing.style.transition = 'unset';
        },
        activeAnimate() {
            this.$refs.currentRing.style.transition = 'stroke-dasharray 1s ease-in-out';
        }
    },
    watch: {
        progress(newVal) {
            let _this = this;
            this.currentProgress = newVal;
        },
        currentProgress(newVal) {
            let _this = this;
            this.$nextTick(function() {
                _this.$refs.currentRing.style['stroke-dasharray'] = `${2 * Math.PI * _this.r * (_this.degree - _this.initDeg) / 360} ${2 * PI * _this.r}`;
                _this.$refs.circle.style.transform = `rotate(${_this.degree - _this.initDeg}deg)`;
                _this.$refs.circle.style['-webkit-transform'] = `rotate(${_this.degree - _this.initDeg}deg)`;
            });
        }
    }
}

</script>
<style lang="scss">
@import '../style/progress.scss';

</style>
